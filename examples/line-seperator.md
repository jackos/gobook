---
noteId: "de63ca50d80511ebb1cccb064a2a37bf"
tags: []

---

## Keep imports in a separate cell


----------------
```go
import "fmt"
```

----------------

## Use shorthand declarations


----------------
```go
x := []int{10, 20, 30}
for k, v := range(x)  {
	fmt.Println(k, v)
}
```
```output
0 10
1 20
```

----------------
