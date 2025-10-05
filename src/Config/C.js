const C = {
  c: {
    easy: [
      {
        question: "Which of the following is a valid variable name in C?",
        options: ["1variable", "_count", "float", "void"],
        answer: "_count",
      },
      {
        question: "What is the size of int on most 32-bit systems?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        answer: "4 bytes",
      },
      {
        question: "Which symbol is used to end a statement in C?",
        options: [".", ":", ";", ","],
        answer: ";",
      },
      {
        question: "Which function is used to print output to the console in C?",
        options: ["print()", "printf()", "cout<<", "echo()"],
        answer: "printf()",
      },
      {
        question: "What is the file extension of a C program file?",
        options: [".cp", ".cpp", ".c", ".class"],
        answer: ".c",
      },
      {
        question: "Which header file is required for using printf and scanf?",
        options: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<math.h>"],
        answer: "<stdio.h>",
      },
      {
        question: "Which of the following is a valid comment in C?",
        options: ["// comment", "# comment", "/* comment */", "Both 1 and 3"],
        answer: "Both 1 and 3",
      },
      {
        question: "Which data type is used to store characters in C?",
        options: ["char", "int", "float", "double"],
        answer: "char",
      },
      {
        question: "What is the output of `printf(\"%d\", 5+3);`?",
        options: ["53", "8", "5+3", "Error"],
        answer: "8",
      },
      {
        question: "Which operator is used for addition in C?",
        options: ["+", "-", "*", "/"],
        answer: "+",
      },
      {
        question: "Which of the following is a correct if statement syntax?",
        options: ["if x>0 {}", "if(x>0) {}", "if x>0 then {}", "if(x>0) then {}"],
        answer: "if(x>0) {}",
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None"],
        answer: "do-while",
      },
      {
        question: "What is the value of a uninitialized local variable in C?",
        options: ["0", "Garbage value", "NULL", "1"],
        answer: "Garbage value",
      },
      {
        question: "Which symbol is used to access structure members in C?",
        options: [".", "->", "&", "*"],
        answer: ".",
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["final", "const", "constant", "immutable"],
        answer: "const",
      },
    ],

    medium: [
      {
        question: "What will be the output of printf(\"%d\", (5 > 2) ? 5 : 2);",
        options: ["2", "5", "0", "Error"],
        answer: "5",
      },
      {
        question: "Which storage class makes a variable visible only within the same file?",
        options: ["auto", "register", "extern", "static"],
        answer: "static",
      },
      {
        question: "Which function is used to get input from the user in C?",
        options: ["scanf()", "input()", "cin>>", "get()"],
        answer: "scanf()",
      },
      {
        question: "What is the output of the expression 5 / 2 in C?",
        options: ["2.5", "3", "2", "Error"],
        answer: "2",
      },
      {
        question: "Which of the following is not a loop in C?",
        options: ["for", "do-while", "repeat-until", "while"],
        answer: "repeat-until",
      },
      {
        question: "Which operator is used to access array elements?",
        options: ["()", "[]", "{}", "<>"],
        answer: "[]",
      },
      {
        question: "Which function is used to allocate memory dynamically?",
        options: ["malloc()", "alloc()", "mem()", "new()"],
        answer: "malloc()",
      },
      {
        question: "Which keyword is used to define a function that cannot return a value?",
        options: ["void", "int", "null", "none"],
        answer: "void",
      },
      {
        question: "Which function is used to free dynamically allocated memory?",
        options: ["delete()", "free()", "remove()", "memfree()"],
        answer: "free()",
      },
      {
        question: "What is the output of `printf(\"%d\", 5%2);`?",
        options: ["2", "1", "0", "5"],
        answer: "1",
      },
      {
        question: "Which of the following is a correct ternary operator usage?",
        options: ["a > b ? x : y", "a > b ? x ; y", "a > b : x ? y", "a > b if x else y"],
        answer: "a > b ? x : y",
      },
      {
        question: "Which type modifier increases the size of an int?",
        options: ["short", "long", "signed", "unsigned"],
        answer: "long",
      },
      {
        question: "Which keyword declares a variable that cannot change during execution?",
        options: ["const", "static", "volatile", "register"],
        answer: "const",
      },
      {
        question: "Which of the following is used to terminate a loop prematurely?",
        options: ["break", "continue", "exit", "return"],
        answer: "break",
      },
      {
        question: "Which operator is used to perform bitwise AND?",
        options: ["&", "&&", "|", "||"],
        answer: "&",
      },
    ],

    hard: [
      {
        question: "Which keyword is used to prevent a variable from modification?",
        options: ["const", "volatile", "static", "register"],
        answer: "const",
      },
      {
        question: "Which of the following is not a valid pointer declaration?",
        options: ["int *p;", "int* p;", "int p*;", "int * p;"],
        answer: "int p*;",
      },
      {
        question: "What is the output of the code: printf(\"%d\", sizeof(3.14));",
        options: ["4", "8", "2", "Error"],
        answer: "8",
      },
      {
        question: "What will happen if you free the same memory twice?",
        options: ["Program crash", "Undefined behavior", "Memory leak", "No effect"],
        answer: "Undefined behavior",
      },
      {
        question: "Which operator has the highest precedence in C?",
        options: ["++", "*", "()", "="],
        answer: "()",
      },
      {
        question: "Which function is used to copy memory in C?",
        options: ["memcopy()", "memcpy()", "copy()", "memcpy_s()"],
        answer: "memcpy()",
      },
      {
        question: "What is the result of `++*p` if `p` is a pointer to int?",
        options: ["Increment the pointer", "Increment the value pointed by p", "Error", "None"],
        answer: "Increment the value pointed by p",
      },
      {
        question: "Which storage class preserves variable value between function calls?",
        options: ["auto", "static", "extern", "register"],
        answer: "static",
      },
      {
        question: "Which keyword prevents the compiler from optimizing a variable?",
        options: ["const", "volatile", "register", "static"],
        answer: "volatile",
      },
      {
        question: "What is the output of `printf(\"%d\", 7 & 3);`?",
        options: ["7", "3", "3", "1"],
        answer: "3",
      },
      {
        question: "Which operator is used for pointer arithmetic?",
        options: ["*", "&", "+", "->"],
        answer: "+",
      },
      {
        question: "Which function is used to compare two strings in C?",
        options: ["strcmp()", "strcompare()", "strcomp()", "compare()"],
        answer: "strcmp()",
      },
      {
        question: "Which type casting converts float to int explicitly?",
        options: ["(int)3.14", "int(3.14)", "cast int(3.14)", "convert int(3.14)"],
        answer: "(int)3.14",
      },
      {
        question: "Which of the following is used to declare a function pointer?",
        options: ["int (*fptr)();", "int *fptr();", "fptr int();", "int fptr*();"],
        answer: "int (*fptr)();",
      },
      {
        question: "What is the default return type of a function in C if not specified?",
        options: ["int", "void", "float", "char"],
        answer: "int",
      },
    ],
  },
};

export default C;
