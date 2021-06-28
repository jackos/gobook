package proto

import (
	"bytes"
	"database/sql"
	"database/sql/driver"
	"encoding/base64"
	"encoding/csv"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"reflect"
	"strconv"

	"github.com/davecgh/go-spew/spew"
	"github.com/traefik/yaegi/interp"
)

type PackageExports map[string]reflect.Value

func (ex PackageExports) Add(name string, value interface{}) PackageExports {
	if ex == nil {
		ex = PackageExports{}
	}

	ex[name] = reflect.ValueOf(value)
	return ex
}

func (ex PackageExports) ExportAs(name string) interp.Exports {
	return interp.Exports{name: map[string]reflect.Value(ex)}
}

func (s *Session) UseNotebookAPI() {
	send := func(mime string, content []byte) {
		s.Send(&Content{
			Mime:  mime,
			Value: content,
		})
	}
	senderr := func(err error) {
		send("error", []byte(err.Error()))
	}

	s.interp.Use(PackageExports{}.
		Add("Show", func(v ...interface{}) {
			for _, v := range v {
				if v, ok := v.(*sql.Rows); ok {
					cols, rows, err := sqlGetRows(v)
					if err == nil {
						c := []*Content{
							{Mime: "application/json", Value: sqlRowsToJSON(cols, rows)},
							{Mime: "text/html", Value: sqlRowsToHTML(cols, rows)},
							{Mime: "text/csv", Value: sqlRowsToCSV(cols, rows)},
						}
						s.Send(c)
						return
					}
				}
				send("text/plain", []byte(spew.Sdump(v)))
			}
		}).
		Add("ShowContent", func(mime string, content []byte) {
			send(mime, content)
		}).
		Add("ShowContentString", func(mime, content string) {
			send(mime, []byte(content))
		}).
		Add("ShowJSON", func(v interface{}) {
			switch v := v.(type) {
			case string:
				send("application/json", []byte(v))
			case []byte:
				send("application/json", v)
			default:
				b, err := json.MarshalIndent(v, "", "  ")
				if err == nil {
					send("application/json", b)
				} else {
					senderr(err)
				}
			}
		}).
		Add("ShowXML", func(v interface{}) {
			switch v := v.(type) {
			case string:
				send("application/xml", []byte(v))
			case []byte:
				send("application/xml", v)
			default:
				b, err := xml.MarshalIndent(v, "", "  ")
				if err == nil {
					send("application/xml", b)
				} else {
					senderr(err)
				}
			}
		}).
		Add("ShowMarkdown", func(language string, v interface{}) {
			var err error
			switch language {
			case "json":
				switch v.(type) {
				case string, []byte:
				default:
					v, err = json.MarshalIndent(v, "", "  ")
				}
			case "xml":
				switch v.(type) {
				case string, []byte:
				default:
					v, err = xml.MarshalIndent(v, "", "  ")
				}
			}

			if err != nil {
				senderr(err)
				return
			}

			send("text/markdown", []byte(fmt.Sprintf("```%s\n%s\n```", language, v)))
		}).
		ExportAs("notebook"))
}

func sqlGetRows(rows *sql.Rows) ([]*sql.ColumnType, [][]interface{}, error) {
	cols, err := rows.ColumnTypes()
	if err != nil {
		return nil, nil, err
	}

	result := [][]interface{}{}

	rvals := make([]reflect.Value, len(cols))
	vals := make([]interface{}, len(cols))
	for rows.Next() {
		for i := range cols {
			rvals[i] = reflect.New(cols[i].ScanType())
			vals[i] = rvals[i].Interface()
		}

		err := rows.Scan(vals...)
		if err != nil {
			return nil, nil, err
		}

		entry := make([]interface{}, len(cols))
		for i := range cols {
			v := rvals[i].Elem().Interface()
			typ := cols[i].DatabaseTypeName()

			switch v := v.(type) {
			case driver.Valuer:
				u, err := v.Value()
				if err == nil {
					entry[i] = u
				} else {
					entry[i] = v
				}

			case sql.RawBytes:
				if typ == "CHAR" || typ == "VARCHAR" {
					entry[i] = string([]byte(v))
				} else {
					entry[i] = base64.StdEncoding.EncodeToString([]byte(v))
				}

			default:
				entry[i] = v
			}
		}

		result = append(result, entry)
	}

	return cols, result, nil
}

func sqlRowsToJSON(cols []*sql.ColumnType, rows [][]interface{}) []byte {
	buf := new(bytes.Buffer)

	s := make([][]byte, len(cols))
	for i := range cols {
		s[i], _ = json.Marshal(cols[i].Name())
	}

	buf.WriteString("[\n")
	for i, row := range rows {
		if i > 0 {
			buf.WriteString(",\n")
		}
		buf.WriteString("\t{ ")
		for j := range s {
			if j > 0 {
				buf.WriteString(", ")
			}

			buf.Write(s[j])
			buf.WriteString(": ")

			b, err := json.Marshal(row[j])
			if err == nil {
				buf.Write(b)
			} else {
				buf.WriteString(strconv.Quote(err.Error()))
			}
		}
		buf.WriteString("}")
	}
	buf.WriteString("\n]")

	return buf.Bytes()
}

func sqlRowsToCSV(cols []*sql.ColumnType, rows [][]interface{}) []byte {
	buf := new(bytes.Buffer)
	w := csv.NewWriter(buf)

	s := make([]string, len(cols))
	for i := range cols {
		s[i] = cols[i].Name()
	}
	w.Write(s)

	for _, row := range rows {
		for i := range row {
			s[i] = fmt.Sprint(row[i])
		}
		w.Write(s)
	}

	w.Flush()
	return buf.Bytes()
}

func sqlRowsToHTML(cols []*sql.ColumnType, rows [][]interface{}) []byte {
	out := new(bytes.Buffer)
	out.WriteString(`<table><thead><tr>`)

	for _, col := range cols {
		out.WriteString(fmt.Sprintf(`<td>%s</td>`, col.Name()))
	}

	out.WriteString(`</tr></thead><tbody>`)

	for _, row := range rows {
		out.WriteString(`<tr>`)

		for _, v := range row {
			out.WriteString(fmt.Sprintf(`<td>%v</td>`, v))
		}

		out.WriteString(`<tr>`)
	}

	out.WriteString(`</body></table>`)

	return out.Bytes()
}
