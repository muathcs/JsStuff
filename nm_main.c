#include <stdio.h>
#include <stdlib.h>
#include "adder.h"

int main(int argc, char * argv[]){

	if(argc != 3){
		printf("Usage: ./nm_adder n m (with n and m integers)\n");
		exit(EXIT_SUCCESS);

	}
	int n = atoi(argv[1]);
	int m = atoi(argv[2]);

	int result = n + m;
	printf("The number of arguments %d\n", argc);
	printf("%d plus %d is %d\n", n, m, result);
	
	return 0;
}

