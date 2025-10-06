const DATA_STRUCT = {
  data: {
    easy: [
      {
        question: "What data structure uses FIFO (First In First Out)?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
      {
        question: "Which data structure is used to implement recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack",
      },
      {
        question: "What is the time complexity of accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
      {
        question: "Which data structure stores data in key-value pairs?",
        options: ["Array", "Linked List", "Hash Map", "Stack"],
        answer: "Hash Map",
      },
      {
        question: "What is the worst case time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: "O(n)",
      },
      {
        question: "Which of the following is NOT a linear data structure?",
        options: ["Array", "Queue", "Graph", "Stack"],
        answer: "Graph",
      },
      {
        question: "Which data structure is best for implementing undo functionality?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack",
      },
      {
        question: "Which traversal method is used in Breadth First Search?",
        options: ["Pre-order", "Post-order", "In-order", "Level-order"],
        answer: "Level-order",
      },
      {
        question: "Which sorting algorithm has the best average case time complexity?",
        options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
        answer: "Merge Sort",
      },
      {
        question: "What is the space complexity of an iterative factorial function?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
    ],

    medium: [
      {
        question: "What is the height of a balanced binary tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        question: "Which data structure is used in implementing DFS (Depth First Search)?",
        options: ["Queue", "Stack", "Heap", "Hash Map"],
        answer: "Stack",
      },
      {
        question: "Which of the following is a stable sorting algorithm?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        answer: "Merge Sort",
      },
      {
        question: "What is the time complexity of inserting an element at the beginning of a linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
      {
        question: "Which algorithm is used to find the shortest path in a graph?",
        options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "DFS"],
        answer: "Dijkstra's Algorithm",
      },
      {
        question: "What data structure is used in implementing priority queues?",
        options: ["Heap", "Stack", "Queue", "Linked List"],
        answer: "Heap",
      },
      {
        question: "Which data structure is used in BFS (Breadth First Search)?",
        options: ["Queue", "Stack", "Heap", "Array"],
        answer: "Queue",
      },
      {
        question: "What is the average case time complexity of binary search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: "O(log n)",
      },
      {
        question: "Which of the following is NOT a divide and conquer algorithm?",
        options: ["Merge Sort", "Quick Sort", "Binary Search", "Bubble Sort"],
        answer: "Bubble Sort",
      },
      {
        question: "Which data structure is used to implement a function call stack?",
        options: ["Queue", "Stack", "Heap", "Array"],
        answer: "Stack",
      },
    ],

    hard: [
      {
        question: "What is the time complexity of the worst-case Quick Sort?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        answer: "O(n^2)",
      },
      {
        question: "Which algorithm is used to detect a cycle in a directed graph?",
        options: ["Kahn's Algorithm", "Floyd’s Cycle Detection", "DFS with recursion stack", "BFS"],
        answer: "DFS with recursion stack",
      },
      {
        question: "Which data structure is optimal for implementing LRU Cache?",
        options: ["Queue", "Stack", "Hash Map + Doubly Linked List", "Heap"],
        answer: "Hash Map + Doubly Linked List",
      },
      {
        question: "What is the space complexity of recursive Fibonacci implementation?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(n)",
      },
      {
        question: "Which algorithm finds the Minimum Spanning Tree of a graph?",
        options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
        answer: "Kruskal's Algorithm",
      },
      {
        question: "Which data structure is used for implementing memoization?",
        options: ["Hash Map", "Queue", "Stack", "Linked List"],
        answer: "Hash Map",
      },
      {
        question: "What is the time complexity of accessing an element in a balanced Binary Search Tree?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        answer: "O(log n)",
      },
      {
        question: "Which algorithm is used for topological sorting?",
        options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
        answer: "DFS",
      },
      {
        question: "Which data structure is most suitable for implementing undo operations?",
        options: ["Queue", "Stack", "Heap", "Hash Map"],
        answer: "Stack",
      },
      {
        question: "Which technique is used to solve problems by breaking them down into overlapping subproblems?",
        options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
        answer: "Dynamic Programming",
      },
    ],
  },
};

export default DATA_STRUCT;
