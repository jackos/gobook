Keep imports in a seperate cell:


##### ***in***
```go
import "fmt"
```
Use shorthand initializers to avoid problems when rerunning cells:


##### ***in***
```go
x := 10
y := 5
fmt.Println("x + y =", x + y)
```
##### ***out***
```output
x + y = 15
```

##### ***in***
```go
x := []int{0, 1, 2, 3, 4, 5, 20, 50, 60}
for k, v := range(x)  {
	fmt.Println(k, v)
}
```
##### ***out***
```output
0 0
1 1
2 2
3 3
4 4
5 5
6 20
7 50
```

##### ***in***
```go
z := 20
println(z)
```
##### ***out***
```output
8 60
20
```
