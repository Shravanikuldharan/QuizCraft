const CPP = {
  cpp: {
    easy: [
      {
        question: "Which symbol is used to denote a single-line comment in C++?",
        options: ["/* */", "//", "#", "--"],
        answer: "//",
      },
      {
        question: "C++ was developed by?",
        options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
        answer: "Bjarne Stroustrup",
      },
      {
        question: "Which of the following is used to output data in C++?",
        options: ["printf()", "cout<<", "cin>>", "write()"],
        answer: "cout<<",
      },
      {
        question: "Which header file is needed for cout and cin?",
        options: ["<iostream>", "<stdio.h>", "<conio.h>", "<string.h>"],
        answer: "<iostream>",
      },
      {
        question: "Which operator is used to access members of a class?",
        options: [".", "->", "::", ":"],
        answer: ".",
      }
    ],

    medium: [
      {
        question: "What is function overloading in C++?",
        options: [
          "Same function name with different parameters",
          "Using same variable name in multiple scopes",
          "Overriding base class function",
          "All of the above",
        ],
        answer: "Same function name with different parameters",
      },
      {
        question: "Which keyword is used to inherit a class?",
        options: ["extends", "implements", "inherits", ":"],
        answer: ":",
      },
      {
        question: "What is the output of sizeof('A') in C++?",
        options: ["1", "2", "4", "depends on compiler"],
        answer: "1",
      },
      {
        question: "Which of these supports runtime polymorphism?",
        options: ["Function overloading", "Operator overloading", "Virtual functions", "Templates"],
        answer: "Virtual functions",
      }
    ],

    hard: [
      {
        question: "What is a pure virtual function?",
        options: [
          "Function with no body and '=0' declaration",
          "Function that cannot be overloaded",
          "Static function",
          "Function used for constructors",
        ],
        answer: "Function with no body and '=0' declaration",
      },
      {
        question: "Which of the following cannot be a friend of a class?",
        options: ["Function", "Class", "Object", "Another method"],
        answer: "Object",
      },
      {
        question: "What is the diamond problem in C++?",
        options: [
          "Ambiguity due to multiple inheritance",
          "Syntax error in inheritance",
          "Typecasting issue",
          "Template error",
        ],
        answer: "Ambiguity due to multiple inheritance",
    }
    ],
  },
};

export default CPP;
