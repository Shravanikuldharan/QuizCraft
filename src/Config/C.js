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
      
    }
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
    }
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
    }
  ],
},
}

export default C;