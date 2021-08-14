
---
```go
client := &http.Client{
	Timeout: 30 * time.Second,
}

req, err := http.NewRequestWithContext(context.Background(),
	http.MethodGet, "https://jsonplaceholder.typicode.com/todos/4", nil)
if err != nil {
	panic(err)
}

req.Header.Add("X-My-Client", "Learning Go")
res, err := client.Do(req)
if err != nil {
	panic(err)
}
defer res.Body.Close()
if res.StatusCode != http.StatusOK {
	panic(fmt.Sprintf("unexpected status: got %v", res.Status))
}

fmt.Println(res.Header.Get("Content-Type"))

var data struct {
	UserID    int    `json:"userId"`
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

err = json.NewDecoder(res.Body).Decode(&data)
if err != nil {
	panic(err)
}

fmt.Printf("%+v\n", data)
```
```output
exit status 2
```
---
