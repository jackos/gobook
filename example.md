Keep imports in a seperate cell:

```go
import "fmt"
```
```8 60
```


Use shorthand initializers to avoid problems when rerunning cells:

```go
x := 10
y := 5
fmt.Println("x + y =", x + y)
```
```x + y = 15
x + y = 15
```
```go
x := []int{0, 1, 2, 3, 4, 5, 20, 50, 60}
for k, v := range(x)  {
	fmt.Println(k, v)
}
```
```0 0
1 1
2 2
3 3
4 4
5 5
6 20
7 50
0 0
1 1
2 2
3 3
4 4
5 5
6 20
7 50
```
