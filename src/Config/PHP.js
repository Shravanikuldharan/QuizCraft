const PHP = {
  php: {
    easy: [
      {
        question: "What does PHP stand for?",
        options: ["Personal Home Page", "Private Home Page", "PHP: Hypertext Preprocessor", "Pretext Hypertext Processor"],
        answer: "PHP: Hypertext Preprocessor",
      },
      {
        question: "Which symbol is used to start a PHP variable?",
        options: ["#", "$", "@", "&"],
        answer: "$",
      },
      {
        question: "Which function is used to output text in PHP?",
        options: ["echo()", "print()", "write()", "Both echo() and print()"],
        answer: "Both echo() and print()",
      },
      {
        question: "Which file extension is used for PHP files?",
        options: [".php", ".html", ".phtml", ".phpfile"],
        answer: ".php",
      },
      {
        question: "Which operator is used for concatenation in PHP?",
        options: ["+", ".", "&", "concat()"],
        answer: ".",
      },
    ],

    medium: [
      {
        question: "Which superglobal variable is used to collect form data with POST method?",
        options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
        answer: "$_POST",
      },
      {
        question: "Which function is used to include a file in PHP?",
        options: ["include()", "require()", "Both include() and require()", "import()"],
        answer: "Both include() and require()",
      },
      {
        question: "Which function is used to start a session in PHP?",
        options: ["session_start()", "start_session()", "begin_session()", "init_session()"],
        answer: "session_start()",
      },
      {
        question: "Which of the following is used to connect to a MySQL database in PHP?",
        options: ["mysqli_connect()", "mysql_connect()", "connect()", "db_connect()"],
        answer: "mysqli_connect()",
      },
      {
        question: "Which function is used to check if a variable is set in PHP?",
        options: ["isset()", "empty()", "exists()", "defined()"],
        answer: "isset()",
      },
    ],

    hard: [
      {
        question: "Which keyword is used to define a class in PHP?",
        options: ["class", "object", "struct", "define"],
        answer: "class",
      },
      {
        question: "Which magic constant returns the full path and filename of the current file?",
        options: ["__FILE__", "__DIR__", "__FUNCTION__", "__LINE__"],
        answer: "__FILE__",
      },
      {
        question: "Which method is used to prevent SQL injection in PHP?",
        options: ["Prepared statements", "mysqli_query()", "addslashes()", "None of the above"],
        answer: "Prepared statements",
      },
      {
        question: "Which function is used to serialize a PHP value?",
        options: ["serialize()", "json_encode()", "var_export()", "pack()"],
        answer: "serialize()",
      },
      {
        question: "Which function is used to destroy all data registered to a session?",
        options: ["session_destroy()", "session_unset()", "unset()", "destroy_session()"],
        answer: "session_destroy()",
      },
    ],
  },
};

export default PHP;
