const PYTHON = {
  python: {
    easy: [
      {
        question: "Which of the following is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: "def",
      },
      {
        question: "Which symbol is used to start a comment in Python?",
        options: ["#", "//", "/* */", "--"],
        answer: "#",
      },
      {
        question: "Which of the following is a valid Python variable name?",
        options: ["1var", "var_1", "var-1", "var!"],
        answer: "var_1",
      },
      {
        question: "Which data type is immutable in Python?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: "Tuple",
      },
      {
        question: "Which function is used to get input from the user?",
        options: ["input()", "read()", "scanf()", "cin>>"],
        answer: "input()",
      },
    ],

    medium: [
      {
        question: "Which keyword is used for exception handling in Python?",
        options: ["try-except", "catch", "handle", "error"],
        answer: "try-except",
      },
      {
        question: "Which method adds an item to the end of a list?",
        options: ["append()", "add()", "insert()", "extend()"],
        answer: "append()",
      },
      {
        question: "Which of the following is used to import modules in Python?",
        options: ["import", "include", "require", "use"],
        answer: "import",
      },
      {
        question: "Which operator is used for floor division?",
        options: ["/", "//", "%", "**"],
        answer: "//",
      },
      {
        question: "Which of the following is true about Python dictionaries?",
        options: ["They store key-value pairs", "Keys are unique", "Values can be any data type", "All of the above"],
        answer: "All of the above",
      },
    ],

    hard: [
      {
        question: "Which function converts a Python object to a JSON string?",
        options: ["json.dumps()", "json.loads()", "str()", "repr()"],
        answer: "json.dumps()",
      },
      {
        question: "Which of the following is true about Python generators?",
        options: ["They use yield to produce values", "They are memory efficient", "They are iterable", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which decorator is used to define a class method in Python?",
        options: ["@classmethod", "@staticmethod", "@property", "@decorator"],
        answer: "@classmethod",
      },
      {
        question: "Which function is used to read all lines of a file in Python?",
        options: ["readlines()", "read()", "readline()", "open()"],
        answer: "readlines()",
      },
      {
        question: "Which of the following is true about Python's GIL?",
        options: ["It prevents multiple threads from executing Python bytecode simultaneously", "It affects CPU-bound programs", "It does not affect I/O-bound programs", "All of the above"],
        answer: "All of the above",
      },
    ],
  },
};

export default PYTHON;