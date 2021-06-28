Keep imports in a seperate cell:

```go
import "fmt"
```

Use shorthand initializers to avoid problems when rerunning cells:

```go
x := 10
y := 5
fmt.Println("x + y =", x + y)
```

```go
x := []int{0, 1, 2, 3, 4, 5, 20, 50, 60}
for k, v := range(x)  {
	fmt.Println(k, v)
}
```
