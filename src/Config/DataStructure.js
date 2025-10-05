const DATASTRUCTURE = {
  dsa: {
    easy: [
      {
        question: "Which of the following is a linear data structure?",
        options: ["Array", "Binary Tree", "Graph", "Tree"],
        answer: "Array",
      },
      {
        question: "What is the index of the first element in an array in most programming languages?",
        options: ["0", "1", "-1", "Depends on language"],
        answer: "0",
      },
      {
        question: "Which data structure uses FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
      {
        question: "Which data structure uses LIFO principle?",
        options: ["Stack", "Queue", "Linked List", "Graph"],
        answer: "Stack",
      },
      {
        question: "Which of the following is not a linear data structure?",
        options: ["Array", "Linked List", "Stack", "Tree"],
        answer: "Tree",
      },
      {
        question: "What is the time complexity to access an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
      {
        question: "Which data structure is used in recursion?",
        options: ["Queue", "Stack", "Heap", "Graph"],
        answer: "Stack",
      },
      {
        question: "Which of the following is a static data structure?",
        options: ["Array", "Linked List", "Stack", "Queue"],
        answer: "Array",
      },
      {
        question: "Which operation is used to remove an element from a stack?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        answer: "Pop",
      },
      {
        question: "Which operation is used to add an element to a stack?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        answer: "Push",
      },
      {
        question: "Which operation is used to remove an element from a queue?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        answer: "Dequeue",
      },
      {
        question: "Which operation is used to add an element to a queue?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        answer: "Enqueue",
      },
      {
        question: "Which data structure is preferred for implementing a priority system?",
        options: ["Queue", "Priority Queue", "Stack", "Linked List"],
        answer: "Priority Queue",
      },
      {
        question: "Which data structure uses nodes connected via pointers?",
        options: ["Array", "Linked List", "Stack", "Queue"],
        answer: "Linked List",
      },
      {
        question: "Which type of linked list allows traversal in both directions?",
        options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Array"],
        answer: "Doubly Linked List",
      },
    ],

    medium: [
      {
        question: "Which is the time complexity of inserting an element at the beginning of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
      {
        question: "Which traversal method uses Left, Root, Right order?",
        options: ["Preorder", "Inorder", "Postorder", "Level-order"],
        answer: "Inorder",
      },
      {
        question: "Which traversal method visits root first, then left, then right?",
        options: ["Preorder", "Inorder", "Postorder", "Level-order"],
        answer: "Preorder",
      },
      {
        question: "Which data structure is used for implementing recursion internally?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        answer: "Stack",
      },
      {
        question: "Which tree is used to implement a dictionary or symbol table?",
        options: ["Binary Search Tree", "Heap", "AVL Tree", "Trie"],
        answer: "Trie",
      },
      {
        question: "What is the worst-case time complexity of searching in a balanced binary search tree?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        question: "Which of the following is used to implement a priority queue?",
        options: ["Heap", "Stack", "Queue", "Linked List"],
        answer: "Heap",
      },
      {
        question: "Which data structure is used in BFS traversal of a graph?",
        options: ["Queue", "Stack", "Heap", "Priority Queue"],
        answer: "Queue",
      },
      {
        question: "Which data structure is used in DFS traversal of a graph?",
        options: ["Stack", "Queue", "Heap", "Priority Queue"],
        answer: "Stack",
      },
      {
        question: "Which is the average case time complexity for searching in a hash table?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: "O(1)",
      },
      {
        question: "What is the main advantage of a doubly linked list over a singly linked list?",
        options: [
          "More memory efficient",
          "Traversal in both directions",
          "Faster insertion at head",
          "Faster search",
        ],
        answer: "Traversal in both directions",
      },
      {
        question: "Which of the following sorting algorithms is based on divide and conquer?",
        options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
        answer: "Quick Sort",
      },
      {
        question: "Which data structure is ideal for implementing undo functionality?",
        options: ["Queue", "Stack", "Heap", "Linked List"],
        answer: "Stack",
      },
      {
        question: "Which graph representation is best for sparse graphs?",
        options: ["Adjacency Matrix", "Adjacency List", "Edge List", "None"],
        answer: "Adjacency List",
      },
      {
        question: "Which of the following operations is O(1) in a circular queue?",
        options: ["Enqueue", "Dequeue", "Both", "None"],
        answer: "Both",
      },
    ],

    hard: [
      {
        question: "What is the time complexity of searching in an AVL tree?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        question: "Which data structure is used for implementing Dijkstra's shortest path algorithm?",
        options: ["Queue", "Heap", "Stack", "Graph"],
        answer: "Heap",
      },
      {
        question: "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2^h - 1", "2^h", "h^2", "h^3"],
        answer: "2^h - 1",
      },
      {
        question: "Which of the following is true for a red-black tree?",
        options: [
          "Every node is red or black",
          "Root is always black",
          "No two red nodes are adjacent",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which data structure is used in implementing LRU cache?",
        options: ["Queue", "Doubly Linked List with Hash", "Stack", "Array"],
        answer: "Doubly Linked List with Hash",
      },
      {
        question: "Which traversal of a binary tree is used to get sorted order of elements?",
        options: ["Inorder", "Preorder", "Postorder", "Level-order"],
        answer: "Inorder",
      },
      {
        question: "Which data structure is used to detect a cycle in a graph?",
        options: ["DFS with visited array", "BFS", "Queue", "Heap"],
        answer: "DFS with visited array",
      },
      {
        question: "Which hashing technique handles collisions using linked lists?",
        options: ["Open Addressing", "Separate Chaining", "Double Hashing", "Linear Probing"],
        answer: "Separate Chaining",
      },
      {
        question: "Which algorithm is used to find the Minimum Spanning Tree?",
        options: ["Prim's", "Dijkstra's", "Floyd-Warshall", "Kruskal's"],
        answer: "Prim's",
      },
      {
        question: "Which type of heap is used in implementing a priority queue?",
        options: ["Binary Heap", "Fibonacci Heap", "Both", "None"],
        answer: "Both",
      },
      {
        question: "Which data structure is used in implementing recursive function calls?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        answer: "Stack",
      },
      {
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
        answer: "O(n^2)",
      },
      {
        question: "Which graph traversal algorithm uses a queue for implementation?",
        options: ["BFS", "DFS", "Topological Sort", "Dijkstra"],
        answer: "BFS",
      },
      {
        question: "Which of the following is true about a circular linked list?",
        options: [
          "Last node points to first node",
          "No NULL in the list",
          "Can be singly or doubly linked",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "Which data structure is ideal for implementing a double-ended queue?",
        options: ["Array", "Deque", "Stack", "Queue"],
        answer: "Deque",
      },
    ],
  },
};

export default DATASTRUCTURE;