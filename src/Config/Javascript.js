const JAVASCRIPT = {
  javascript: {
    easy: [
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x;", "int x;", "let x;", "Both var x; and let x;"],
        answer: "Both var x; and let x;",
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "Both // and /* */"],
        answer: "Both // and /* */",
      },
      {
        question: "Which of the following is used to output in JavaScript?",
        options: ["console.log()", "print()", "echo()", "System.out.println()"],
        answer: "console.log()",
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Undefined", "Number", "Float", "Boolean"],
        answer: "Float",
      },
      {
        question: "Which operator is used for strict equality comparison?",
        options: ["==", "===", "=", "!="],
        answer: "===",
      },
      {
        question: "Which of the following is used to declare a constant variable?",
        options: ["const", "let", "var", "static"],
        answer: "const",
      },
      {
        question: "Which keyword is used to define a function?",
        options: ["function", "fun", "def", "method"],
        answer: "function",
      },
      {
        question: "Which of the following is used to create an array?",
        options: ["[]", "{}", "()", "array()"],
        answer: "[]",
      },
      {
        question: "Which keyword is used to refer to the current object?",
        options: ["this", "self", "me", "current"],
        answer: "this",
      },
      {
        question: "Which method is used to convert a JSON string to an object?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
        answer: "JSON.parse()",
      },
      {
        question: "Which method is used to convert an object to a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "toString()", "toJSON()"],
        answer: "JSON.stringify()",
      },
      {
        question: "Which of the following is used to declare a variable that can be reassigned?",
        options: ["let", "const", "var", "Both let and var"],
        answer: "Both let and var",
      },
      {
        question: "Which operator is used for assignment in JavaScript?",
        options: ["=", "==", "===", ":"],
        answer: "=",
      },
      {
        question: "Which of the following can store multiple values in a single variable?",
        options: ["Array", "Object", "Both Array and Object", "String"],
        answer: "Both Array and Object",
      },
      {
        question: "Which of the following is the correct syntax for an arrow function?",
        options: ["() => {}", "function() {}", "fun() => {}", "=> {}"],
        answer: "() => {}",
      },
    ],

    medium: [
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
      },
      {
        question: "Which method removes the last element of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()",
      },
      {
        question: "Which method adds an element to the beginning of an array?",
        options: ["unshift()", "push()", "shift()", "pop()"],
        answer: "unshift()",
      },
      {
        question: "Which method removes the first element of an array?",
        options: ["shift()", "unshift()", "pop()", "push()"],
        answer: "shift()",
      },
      {
        question: "Which method returns the number of elements in an array?",
        options: ["length", "size", "count", "elements"],
        answer: "length",
      },
      {
        question: "Which event occurs when the user clicks on an element?",
        options: ["onclick", "onchange", "onmouseover", "onhover"],
        answer: "onclick",
      },
      {
        question: "Which method is used to add an element before another in the DOM?",
        options: ["insertBefore()", "appendChild()", "replaceChild()", "createElement()"],
        answer: "insertBefore()",
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["try-catch", "throw", "finally", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which method is used to find the index of an element in an array?",
        options: ["indexOf()", "find()", "search()", "getIndex()"],
        answer: "indexOf()",
      },
      {
        question: "Which method filters elements in an array based on a condition?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: "filter()",
      },
      {
        question: "Which method executes a function on each array element?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "forEach()",
      },
      {
        question: "Which method applies a function to each element and returns a new array?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "map()",
      },
      {
        question: "Which method reduces an array to a single value?",
        options: ["reduce()", "map()", "forEach()", "filter()"],
        answer: "reduce()",
      },
      {
        question: "Which method converts a string to lowercase?",
        options: ["toLowerCase()", "toLower()", "lowerCase()", "lower()"],
        answer: "toLowerCase()",
      },
      {
        question: "Which method converts a string to uppercase?",
        options: ["toUpperCase()", "toUpper()", "upperCase()", "upper()"],
        answer: "toUpperCase()",
      },
    ],

    hard: [
      {
        question: "Which method is used to deep copy an object in JavaScript?",
        options: ["structuredClone()", "Object.assign()", "JSON.parse(JSON.stringify())", "Both 1 and 3"],
        answer: "Both 1 and 3",
      },
      {
        question: "Which of the following is true about closures?",
        options: [
          "Closures can access outer function variables",
          "Closures can preserve variables after the function returns",
          "Closures can be used for data privacy",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which symbol is used for template literals in JavaScript?",
        options: ["`backticks`", "'single quotes'", '"double quotes"', "$$"],
        answer: "`backticks`",
      },
      {
        question: "Which keyword is used to define a class in ES6?",
        options: ["class", "function", "object", "def"],
        answer: "class",
      },
      {
        question: "Which method freezes an object to prevent modifications?",
        options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"],
        answer: "Object.freeze()",
      },
      {
        question: "Which operator is used to access object properties dynamically?",
        options: ["[]", ".", "Both", "None"],
        answer: "Both",
      },
      {
        question: "Which of the following is true about async/await?",
        options: [
          "Async functions return a promise",
          "Await can only be used inside async functions",
          "It simplifies promise handling",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which method is used to copy values from one array to another?",
        options: ["slice()", "splice()", "concat()", "copyWithin()"],
        answer: "concat()",
      },
      {
        question: "Which type of scope does 'let' have?",
        options: ["Block scope", "Function scope", "Global scope", "Both function and block"],
        answer: "Block scope",
      },
      {
        question: "Which type of scope does 'var' have?",
        options: ["Function scope", "Block scope", "Global scope", "Both block and function"],
        answer: "Function scope",
      },
      {
        question: "Which symbol is used for optional chaining in JavaScript?",
        options: ["?.", "??", ":", "&&"],
        answer: "?.",
      },
      {
        question: "Which of the following creates a shallow copy of an object?",
        options: ["Object.assign()", "structuredClone()", "JSON.parse(JSON.stringify())", "Both 1 and 2"],
        answer: "Object.assign()",
      },
      {
        question: "Which method checks if an array includes a certain value?",
        options: ["includes()", "contains()", "indexOf()", "find()"],
        answer: "includes()",
      },
      {
        question: "Which of the following is true about 'this' in JavaScript?",
        options: [
          "'this' refers to the calling object",
          "Arrow functions do not have their own 'this'",
          "'this' value depends on how the function is called",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which method removes elements from an array and optionally inserts new elements?",
        options: ["splice()", "slice()", "filter()", "map()"],
        answer: "splice()",
      },
    ],
  },
};

export default JAVASCRIPT;
