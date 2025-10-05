const REACTJS = {
  reactjs: {
    easy: [
      {
        question: "Which function is used to define a React component?",
        options: ["function", "class", "Both function and class", "component()"],
        answer: "Both function and class",
      },
      {
        question: "Which library is required to create React components?",
        options: ["React", "ReactDOM", "Redux", "Node.js"],
        answer: "React",
      },
      {
        question: "What is JSX in React?",
        options: ["JavaScript XML", "Java Syntax eXtension", "JSON Syntax", "None of these"],
        answer: "JavaScript XML",
      },
      {
        question: "Which method is used to render React elements to the DOM?",
        options: ["ReactDOM.render()", "React.render()", "render()", "DOM.render()"],
        answer: "ReactDOM.render()",
      },
      {
        question: "Which hook is used for managing state in functional components?",
        options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
        answer: "useState()",
      },
    ],

    medium: [
      {
        question: "Which hook is used to perform side effects in functional components?",
        options: ["useEffect()", "useState()", "useRef()", "useMemo()"],
        answer: "useEffect()",
      },
      {
        question: "What is the purpose of keys in React lists?",
        options: ["To uniquely identify elements", "To sort elements", "To style elements", "To bind events"],
        answer: "To uniquely identify elements",
      },
      {
        question: "Which hook returns a mutable ref object?",
        options: ["useRef()", "useState()", "useEffect()", "useMemo()"],
        answer: "useRef()",
      },
      {
        question: "Which method is used in class components to update the state?",
        options: ["this.setState()", "this.updateState()", "setState()", "updateState()"],
        answer: "this.setState()",
      },
      {
        question: "Which feature helps to prevent unnecessary re-renders in React?",
        options: ["React.memo", "useState", "useEffect", "ComponentDidMount"],
        answer: "React.memo",
      },
    ],

    hard: [
      {
        question: "Which hook is used to memoize expensive computations?",
        options: ["useMemo()", "useCallback()", "useEffect()", "useRef()"],
        answer: "useMemo()",
      },
      {
        question: "Which hook is used to memoize a function?",
        options: ["useCallback()", "useMemo()", "useEffect()", "useState()"],
        answer: "useCallback()",
      },
      {
        question: "Which method is used to catch errors in React class components?",
        options: ["componentDidCatch()", "getDerivedStateFromError()", "both", "none"],
        answer: "both",
      },
      {
        question: "Which Context API method provides a value to all children components?",
        options: ["Provider", "Consumer", "createContext", "useContext"],
        answer: "Provider",
      },
      {
        question: "Which feature in React 18 enables concurrent rendering?",
        options: ["Concurrent Mode", "Strict Mode", "Suspense", "Hooks"],
        answer: "Concurrent Mode",
      },
    ],
  },
};

export default REACTJS;
