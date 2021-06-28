package main

import (
	"net"
	"os"
	"sync"
	"time"
)

type stdioListener struct {
	mu sync.Mutex
}

func (l *stdioListener) Accept() (net.Conn, error) {
	l.mu.Lock()
	return stdioConnection{&l.mu}, nil
}

func (l *stdioListener) Close() error {
	os.Stdin.Close()
	os.Stdout.Close()
	return nil
}

func (l *stdioListener) Addr() net.Addr {
	return stdioAddress{}
}

type stdioConnection struct {
	mu *sync.Mutex
}

func (c stdioConnection) Close() error {
	c.mu.Unlock()
	return nil
}

func (c stdioConnection) SetDeadline(t time.Time) error {
	err1 := c.SetReadDeadline(t)
	err2 := c.SetWriteDeadline(t)

	if err1 == nil {
		return err1
	}
	return err2
}

func (stdioConnection) LocalAddr() net.Addr                { return stdioAddress{} }
func (stdioConnection) RemoteAddr() net.Addr               { return stdioAddress{} }
func (stdioConnection) Read(b []byte) (n int, err error)   { return os.Stdin.Read(b) }
func (stdioConnection) Write(b []byte) (n int, err error)  { return os.Stdout.Write(b) }
func (stdioConnection) SetReadDeadline(t time.Time) error  { return os.Stdin.SetReadDeadline(t) }
func (stdioConnection) SetWriteDeadline(t time.Time) error { return os.Stdout.SetWriteDeadline(t) }

type stdioAddress struct{}

func (stdioAddress) Network() string { return "stdio" }
func (stdioAddress) String() string  { return "stdio" }
