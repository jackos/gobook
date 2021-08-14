
---
```go
test()
```
```output
exit status 2# command-line-arguments
/tmp/main.go:8:1: undefined: test
```
---

---
```go
x := []int{10, 20, 30}
fmt.Println(x)
```
```output

[10 20 30]
```
---

---
```go
func test(){
	fmt.Println("cool one")
}
```
---

---
```go
func sick() {
	fmt.Println("Wow very sick")
}
```
---

---
```go
sick()
test()
```
```output

Wow very sick
cool one
```
---
