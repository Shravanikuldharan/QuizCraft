const NODEJS = {
  nodejs: {
    easy: [
      {
        question: "Which of the following is Node.js built on?",
        options: ["JavaScript engine V8", "Python interpreter", "Java JVM", "C# runtime"],
        answer: "JavaScript engine V8",
      },
      {
        question: "Which of the following is commonly used to manage Node.js packages?",
        options: ["npm", "pip", "gem", "composer"],
        answer: "npm",
      },
      {
        question: "Which of the following is used to create a Node.js server?",
        options: ["http.createServer()", "net.createServer()", "server.create()", "app.createServer()"],
        answer: "http.createServer()",
      },
      {
        question: "Which global object provides information about the current Node.js process?",
        options: ["process", "global", "module", "exports"],
        answer: "process",
      },
      {
        question: "Which of the following is used to include modules in Node.js?",
        options: ["require()", "import()", "include()", "use()"],
        answer: "require()",
      },
    ],

    medium: [
      {
        question: "Which Node.js module is used to work with the file system?",
        options: ["fs", "path", "os", "http"],
        answer: "fs",
      },
      {
        question: "Which method reads a file asynchronously in Node.js?",
        options: ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
        answer: "fs.readFile()",
      },
      {
        question: "Which module helps to handle and manipulate file paths?",
        options: ["path", "fs", "url", "os"],
        answer: "path",
      },
      {
        question: "Which method is used to start a server and listen to requests?",
        options: ["server.listen()", "server.start()", "http.listen()", "app.listen()"],
        answer: "server.listen()",
      },
      {
        question: "Which method is used to create an event emitter in Node.js?",
        options: ["new EventEmitter()", "Event.on()", "emit()", "event.create()"],
        answer: "new EventEmitter()",
      },
    ],

    hard: [
      {
        question: "Which of the following is true about Node.js streams?",
        options: ["Streams are used to handle reading/writing of data efficiently", "Streams can be readable, writable, or both", "Streams support piping", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which module is used to create child processes in Node.js?",
        options: ["child_process", "process", "cluster", "worker_threads"],
        answer: "child_process",
      },
      {
        question: "Which Node.js module provides utilities for debugging and inspecting?",
        options: ["util", "debug", "inspect", "console"],
        answer: "util",
      },
      {
        question: "Which method converts a Buffer to a string in Node.js?",
        options: ["buffer.toString()", "buffer.convert()", "buffer.stringify()", "buffer.encode()"],
        answer: "buffer.toString()",
      },
      {
        question: "Which module provides operating system-related utility methods and properties?",
        options: ["os", "fs", "process", "path"],
        answer: "os",
      },
    ],
  },
};

export default NODEJS;