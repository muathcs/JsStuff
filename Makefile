CC = gcc
CFLAG=-Wall
nm_main: nm_main.o adder.o

clean:
	rm -f nm_main.o adder.o
