const JAVA = {
  java: {
    easy: [
      {
        question: "Which of the following is the correct way to declare a variable in Java?",
        options: ["int 1x;", "int x;", "float x;", "var x;"],
        answer: "int x;",
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "main()", "run()", "init()"],
        answer: "main()",
      },
      {
        question: "Which of the following is a valid data type in Java?",
        options: ["int", "integer", "num", "decimal"],
        answer: "int",
      },
      {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "Class", "object", "struct"],
        answer: "class",
      },
      {
        question: "Which operator is used for equality comparison in Java?",
        options: ["=", "==", "===", "!="],
        answer: "==",
      },
      {
        question: "Which of these is not a primitive data type in Java?",
        options: ["int", "char", "String", "boolean"],
        answer: "String",
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "implements", "inherits", "super"],
        answer: "extends",
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "if"],
        answer: "do-while",
      },
      {
        question: "Which keyword is used to define a constant in Java?",
        options: ["constant", "final", "const", "immutable"],
        answer: "final",
      },
      {
        question: "Which of the following is used to handle exceptions?",
        options: ["try-catch", "throw", "catch", "finalize"],
        answer: "try-catch",
      },
      {
        question: "Which of the following is a valid Java identifier?",
        options: ["1variable", "_count", "class", "void"],
        answer: "_count",
      },
      {
        question: "Which keyword is used to refer to the current object in Java?",
        options: ["this", "self", "super", "current"],
        answer: "this",
      },
      {
        question: "Which access modifier allows access only within the same class?",
        options: ["private", "public", "protected", "default"],
        answer: "private",
      },
      {
        question: "Which of the following is used to create an object in Java?",
        options: ["new", "create", "object", "init"],
        answer: "new",
      },
      {
        question: "Which package is automatically imported by default in Java?",
        options: ["java.lang", "java.util", "java.io", "java.net"],
        answer: "java.lang",
      },
    ],

    medium: [
      {
        question: "Which of the following is true about Java methods?",
        options: [
          "Method cannot return multiple values",
          "Method must belong to a class",
          "Method can be static or instance",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which keyword is used to prevent a class from being inherited?",
        options: ["final", "static", "abstract", "private"],
        answer: "final",
      },
      {
        question: "Which collection allows key-value pairs in Java?",
        options: ["ArrayList", "HashMap", "Stack", "LinkedList"],
        answer: "HashMap",
      },
      {
        question: "Which interface must be implemented to make a class comparable?",
        options: ["Comparable", "Comparator", "Iterable", "Collection"],
        answer: "Comparable",
      },
      {
        question: "Which exception occurs when dividing by zero?",
        options: ["ArithmeticException", "NullPointerException", "IOException", "ClassNotFoundException"],
        answer: "ArithmeticException",
      },
      {
        question: "Which method is used to start a thread in Java?",
        options: ["start()", "run()", "execute()", "init()"],
        answer: "start()",
      },
      {
        question: "Which keyword is used to call the parent class constructor?",
        options: ["super", "this", "parent", "base"],
        answer: "super",
      },
      {
        question: "Which access modifier allows access within the same package?",
        options: ["default", "public", "protected", "private"],
        answer: "default",
      },
      {
        question: "Which of the following is used to handle multiple exceptions in a single catch block?",
        options: ["Multi-catch", "try-finally", "throw", "throws"],
        answer: "Multi-catch",
      },
      {
        question: "Which interface is implemented by all collection classes?",
        options: ["Collection", "Iterable", "List", "Map"],
        answer: "Collection",
      },
      {
        question: "Which keyword is used to define an abstract method?",
        options: ["abstract", "interface", "virtual", "override"],
        answer: "abstract",
      },
      {
        question: "Which data structure is used to implement LIFO?",
        options: ["Stack", "Queue", "HashMap", "ArrayList"],
        answer: "Stack",
      },
      {
        question: "Which of the following is used to implement FIFO?",
        options: ["Queue", "Stack", "HashMap", "LinkedList"],
        answer: "Queue",
      },
      {
        question: "Which method of the Object class returns a string representation of an object?",
        options: ["toString()", "hashCode()", "equals()", "getClass()"],
        answer: "toString()",
      },
      {
        question: "Which of the following is used to sort elements in a collection?",
        options: ["Collections.sort()", "Arrays.sort()", "Both", "None"],
        answer: "Both",
      },
    ],

    hard: [
      {
        question: "Which type of inheritance is not supported directly in Java?",
        options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
        answer: "Multiple",
      },
      {
        question: "Which of the following is true about Java interfaces?",
        options: [
          "Interfaces can have default methods",
          "Interfaces cannot have constructors",
          "A class can implement multiple interfaces",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which keyword is used to define a thread-safe block?",
        options: ["synchronized", "volatile", "threadsafe", "lock"],
        answer: "synchronized",
      },
      {
        question: "Which method is used to notify waiting threads?",
        options: ["notify()", "wait()", "sleep()", "yield()"],
        answer: "notify()",
      },
      {
        question: "Which exception is thrown when an array is accessed with an illegal index?",
        options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IOException", "ClassCastException"],
        answer: "ArrayIndexOutOfBoundsException",
      },
      {
        question: "Which collection class is synchronized?",
        options: ["Vector", "ArrayList", "HashMap", "LinkedList"],
        answer: "Vector",
      },
      {
        question: "Which class is the superclass of all wrapper classes in Java?",
        options: ["Number", "Object", "Integer", "Double"],
        answer: "Number",
      },
      {
        question: "Which statement about Java generics is true?",
        options: [
          "Generics enable type safety",
          "Generics are checked at compile time",
          "Generics can be used with collections",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which of the following is true about Java memory management?",
        options: [
          "Java uses garbage collection",
          "Memory is automatically freed",
          "Finalize method can be used before garbage collection",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which keyword is used to prevent method overriding?",
        options: ["final", "static", "abstract", "private"],
        answer: "final",
      },
      {
        question: "Which method is used to start a daemon thread?",
        options: ["setDaemon(true)", "start()", "run()", "init()"],
        answer: "setDaemon(true)",
      },
      {
        question: "Which of the following is true about Java enums?",
        options: [
          "Enums are classes",
          "Enums can have methods and fields",
          "Enums can implement interfaces",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which interface is implemented by the HashMap entry set?",
        options: ["Set", "List", "Map", "Collection"],
        answer: "Set",
      },
      {
        question: "Which method is used to make a thread wait until another thread finishes?",
        options: ["join()", "wait()", "sleep()", "yield()"],
        answer: "join()",
      },
      {
        question: "Which keyword is used to define a class that cannot be subclassed?",
        options: ["final", "static", "abstract", "sealed"],
        answer: "final",
      },
    ],
  },
};

export default JAVA;
