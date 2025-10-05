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
      },
      {
        question: "Which of the following is a valid C++ variable name?",
        options: ["1variable", "_count", "float", "void"],
        answer: "_count",
      },
      {
        question: "Which data type is used to store a single character?",
        options: ["char", "string", "int", "float"],
        answer: "char",
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "if"],
        answer: "do-while",
      },
      {
        question: "What is the file extension of a C++ source file?",
        options: [".cpp", ".c", ".cs", ".cxx"],
        answer: ".cpp",
      },
      {
        question: "Which keyword is used to declare a constant in C++?",
        options: ["constant", "final", "const", "immutable"],
        answer: "const",
      },
      {
        question: "Which operator is used for addition in C++?",
        options: ["+", "-", "*", "/"],
        answer: "+",
      },
      {
        question: "Which header file is needed for string operations?",
        options: ["<string>", "<strings.h>", "<cstring>", "<strlib>"],
        answer: "<string>",
      },
      {
        question: "Which of these is a correct way to declare an integer variable?",
        options: ["int x;", "int x()", "int x[];", "integer x;"],
        answer: "int x;",
      },
      {
        question: "Which of the following is a valid comment style in C++?",
        options: ["// comment", "/* comment */", "Both 1 and 2", "# comment"],
        answer: "Both 1 and 2",
      },
      {
        question: "Which operator is used for multiplication in C++?",
        options: ["*", "+", "-", "/"],
        answer: "*",
      },
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
      },
      {
        question: "Which keyword is used to prevent a function from being overridden?",
        options: ["virtual", "override", "final", "static"],
        answer: "final",
      },
      {
        question: "Which operator is used to access members of a pointer to an object?",
        options: [".", "->", "::", "*"],
        answer: "->",
      },
      {
        question: "Which of the following is a correct constructor declaration?",
        options: ["ClassName()", "void ClassName()", "constructor ClassName()", "ClassName:void()"],
        answer: "ClassName()",
      },
      {
        question: "Which type of inheritance allows a class to inherit from multiple classes?",
        options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
        answer: "Multiple",
      },
      {
        question: "Which operator is used for address-of in C++?",
        options: ["&", "*", "->", "%"],
        answer: "&",
      },
      {
        question: "Which type of function is a member of a class but defined outside it?",
        options: ["Inline function", "Friend function", "Member function", "Static function"],
        answer: "Member function",
      },
      {
        question: "Which keyword is used to allow a function access to private members of a class?",
        options: ["friend", "private", "protected", "public"],
        answer: "friend",
      },
      {
        question: "What does the 'new' operator do in C++?",
        options: [
          "Deletes an object",
          "Allocates memory dynamically",
          "Declares a new function",
          "Creates a namespace",
        ],
        answer: "Allocates memory dynamically",
      },
      {
        question: "Which of the following is used to terminate a loop prematurely?",
        options: ["break", "continue", "return", "exit"],
        answer: "break",
      },
      {
        question: "Which operator is used to perform bitwise AND in C++?",
        options: ["&", "&&", "|", "||"],
        answer: "&",
      },
      {
        question: "Which of the following is correct syntax for a template function?",
        options: [
          "template <typename T> T func(T a)",
          "template func <T> T a",
          "template T func(T)",
          "template<T> func(T a)",
        ],
        answer: "template <typename T> T func(T a)",
      },
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
      },
      {
        question: "Which of the following correctly defines a function pointer?",
        options: ["int (*fptr)(int)", "int fptr(int)", "int *fptr(int)", "int fptr*()"],
        answer: "int (*fptr)(int)",
      },
      {
        question: "Which keyword is used to prevent inheritance of a class?",
        options: ["virtual", "sealed", "final", "override"],
        answer: "final",
      },
      {
        question: "Which function is called when an object goes out of scope?",
        options: ["Constructor", "Destructor", "Finalizer", "Allocator"],
        answer: "Destructor",
      },
      {
        question: "Which operator is used to access base class members explicitly?",
        options: ["::", "->", ".", "base::"],
        answer: "::",
      },
      {
        question: "Which operator is overloaded to compare two objects?",
        options: ["==", "=", "equals", "compare"],
        answer: "==",
      },
      {
        question: "Which memory is allocated using 'new' in C++?",
        options: ["Stack", "Heap", "Global", "Register"],
        answer: "Heap",
      },
      {
        question: "What does the 'virtual' keyword do in C++?",
        options: [
          "Makes a function polymorphic",
          "Prevents overriding",
          "Creates a copy of a function",
          "Allocates dynamic memory",
        ],
        answer: "Makes a function polymorphic",
      },
      {
        question: "Which of the following is not allowed in C++?",
        options: ["Multiple inheritance", "Friend function", "Virtual base class", "Dynamic typing"],
        answer: "Dynamic typing",
      },
      {
        question: "Which keyword is used to declare a static class member?",
        options: ["static", "const", "mutable", "volatile"],
        answer: "static",
      },
      {
        question: "Which template type is used to define a generic class?",
        options: [
          "template <typename T> class MyClass {}",
          "template <class T> MyClass {}",
          "template class MyClass<T> {}",
          "template <T> class MyClass {}",
        ],
        answer: "template <typename T> class MyClass {}",
      },
      {
        question: "Which operator is used to dereference a pointer to access object members?",
        options: ["->", ".", "*", "&"],
        answer: "->",
      },
      {
        question: "Which C++ feature allows objects to be passed by reference without copying?",
        options: ["Pointers", "References", "Dynamic memory", "Overloading"],
        answer: "References",
      },
    ],
  },
};

export default CPP;