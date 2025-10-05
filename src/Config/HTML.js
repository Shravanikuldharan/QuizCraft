const HTML = {
  html: {
    easy: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Transfer Markup Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        question: "Which HTML tag is used to define a paragraph?",
        options: ["<para>", "<p>", "<pg>", "<text>"],
        answer: "<p>",
      },
      {
        question: "Which HTML tag is used to display an image?",
        options: ["<img>", "<image>", "<src>", "<picture>"],
        answer: "<img>",
      },
      {
        question: "What is the correct tag for inserting a line break?",
        options: ["<lb>", "<break>", "<br>", "<hr>"],
        answer: "<br>",
      },
      {
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        answer: "<h1>",
      },
    ],

    medium: [
      {
        question: "Which HTML element defines the document body?",
        options: ["<main>", "<body>", "<content>", "<section>"],
        answer: "<body>",
      },
      {
        question: "Which tag is used to create a drop-down list?",
        options: ["<dropdown>", "<select>", "<input>", "<list>"],
        answer: "<select>",
      },
      {
        question: "Which input type defines a checkbox?",
        options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"],
        answer: "<input type='checkbox'>",
      },
      {
        question: "Which HTML tag is used to define a footer for a section?",
        options: ["<bottom>", "<footer>", "<section>", "<end>"],
        answer: "<footer>",
      },
      {
        question: "Which attribute opens a link in a new tab?",
        options: ["newtab", "target='_blank'", "window='_new'", "open='new'"],
        answer: "target='_blank'",
      },
    ],

    hard: [
      {
        question: "What does the <canvas> element in HTML5 do?",
        options: [
          "Displays text",
          "Draws graphics via JavaScript",
          "Displays animations automatically",
          "Plays videos",
        ],
        answer: "Draws graphics via JavaScript",
      },
      {
        question: "Which HTML5 element is used to display scalar measurements within a range?",
        options: ["<meter>", "<progress>", "<range>", "<scale>"],
        answer: "<meter>",
      },
      {
        question: "Which HTML5 API is used for offline storage?",
        options: ["Web SQL", "Local Storage", "Session Storage", "File API"],
        answer: "Local Storage",
      },
      {
        question: "What is the purpose of the <datalist> tag?",
        options: [
          "Provides a list of predefined options for an input element",
          "Creates a drop-down menu",
          "Stores data in browser memory",
          "Defines a list of items",
        ],
        answer: "Provides a list of predefined options for an input element",
      },
      {
        question: "Which HTML tag defines a container for SVG graphics?",
        options: ["<canvas>", "<svg>", "<graphics>", "<draw>"],
        answer: "<svg>",
      },
    ],
  },
};

export default HTML;
