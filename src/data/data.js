export const easyCodeData = [
  {
    id: "1",
    title: "JavaScript Tutorial for Beginners",
    description: "Learn JavaScript from scratch",
    level: "Easy",
    theory: true,
    example: "Input: 'Hello'\nOutput: 5",
    question: "Write a function that takes a string as input and returns the number of characters in the string.",
    codeSnippetSolution: `function countCharacters(str) {
      return str.length;
    }
    console.log(countCharacters("Hello")); // Output: 5`,
    codeSnippetExample: `console.log(countCharacters("JavaScript")); // Output: 10`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `In this task, you create a function to count characters in a string using JavaScript.`,
    vector: "https://example.com/path-to-vector-icons/characters.svg",
  },
  {
    id: "2",
    title: "Variables and Data Types",
    description: "Understanding variables and types in JavaScript",
    level: "Easy",
    theory: true,
    example: "Output: number, string, boolean, undefined, object (for null), symbol",
    question: "Declare variables for each primitive data type in JavaScript and assign them sample values. Log each variable's type to the console.",
    codeSnippetSolution: `let num = 42; let str = "Hello";`,
    codeSnippetExample: `console.log(typeof 25);  // "number"`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise covers JavaScript data types: number, string, boolean, undefined, null, and symbol.`,
    vector: "https://example.com/path-to-vector-icons/data_types.svg",
  },
  {
    id: "3",
    title: "JavaScript Operators",
    description: "Learn about operators in JavaScript",
    level: "Easy",
    theory: true,
    example: "Input: (10, 2)\nOutput: { addition: 12, subtraction: 8, multiplication: 20, division: 5 }",
    question: "Write a function that accepts two numbers and returns an object with the results of adding, subtracting, multiplying, and dividing the numbers.",
    codeSnippetSolution: `function calculateOperations(a, b) { return { addition: a + b, subtraction: a - b, multiplication: a * b, division: a / b }; }`,
    codeSnippetExample: `console.log(calculateOperations(15, 5));`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task explores arithmetic operators by creating a function to perform and return basic operations.`,
    vector: "https://example.com/path-to-vector-icons/operators.svg",
  },
  {
    id: "4",
    title: "Control Flow with If/Else",
    description: "Learn control flow using if/else statements",
    level: "Easy",
    theory: true,
    example: "Input: -3\nOutput: 'Negative'",
    question: "Write a function that checks if a given number is positive, negative, or zero using if/else statements.",
    codeSnippetSolution: `function checkNumber(num) {
      if (num > 0) return "Positive";
      else if (num < 0) return "Negative";
      else return "Zero";
    }
    console.log(checkNumber(-3)); // Output: "Negative"`,
    codeSnippetExample: `console.log(checkNumber(5)); // Output: "Positive"`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise introduces control flow, specifically if/else statements. It demonstrates how to use conditions to categorize inputs.`,
    vector: "https://example.com/path-to-vector-icons/control_flow.svg",
  },
  {
    id: "5",
    title: "Loops in JavaScript",
    description: "Explore loops and iterations in JavaScript",
    level: "Easy",
    theory: true,
    example: "Input: 5\nOutput: 1 2 3 4 5",
    question: "Create a function that takes an integer and prints the numbers from 1 up to the integer using a for loop.",
    codeSnippetSolution: `function printNumbers(n) {
      for (let i = 1; i <= n; i++) {
        console.log(i);
      }
    }
    printNumbers(5);`,
    codeSnippetExample: `printNumbers(3); // Output: 1 2 3`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task highlights loops, focusing on the 'for' loop to print numbers up to a specified integer.`,
    vector: "https://example.com/path-to-vector-icons/loops.svg",
  },
  {
    id: "6",
    title: "Functions and Scope",
    description: "Understanding functions and scope",
    level: "Easy",
    theory: true,
    example: "Output: 'Local Scope Variable' 'Global Scope Variable'",
    question: "Write a function that demonstrates the difference between global and local scope in JavaScript by using a variable with the same name in both scopes.",
    codeSnippetSolution: `let variable = "Global Scope Variable";
    function showScope() {
      let variable = "Local Scope Variable";
      console.log(variable);
    }
    showScope();
    console.log(variable);`,
    codeSnippetExample: `let variable = "Global Variable";
    console.log("Outside function:", variable);`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise explains scope in JavaScript, highlighting how global and local scopes determine variable access.`,
    vector: "https://example.com/path-to-vector-icons/scope.svg",
  },
  {
    id: "7",
    title: "Objects and Arrays",
    description: "Learn about objects and arrays in JavaScript",
    level: "Easy",
    theory: true,
    example: "Input: { name: 'Alice', age: 25, hobbies: ['reading', 'hiking'] }\nOutput: 'Alice: reading, hiking'",
    question: "Create an object representing a person with properties like name, age, and hobbies (array of strings). Write a function to display the person's name and a list of hobbies.",
    codeSnippetSolution: `const person = {
      name: "Alice",
      age: 25,
      hobbies: ["reading", "hiking"]
    };
    function showPersonDetails(person) {
      console.log(person.name + ": " + person.hobbies.join(", "));
    }
    showPersonDetails(person);`,
    codeSnippetExample: `const user = { name: "John", hobbies: ["cycling", "painting"] };`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task demonstrates objects and arrays by creating a 'person' object with properties and hobbies.`,
    vector: "https://example.com/path-to-vector-icons/objects.svg",
  },
  // {
  //   id: "8",
  //   title: "DOM Manipulation",
  //   description: "How to manipulate the DOM in JavaScript",
  //   level: "Easy",
  //   theory: true,
  //   example: "Output: <div id='box' style='background-color: blue'></div>",
  //   question: "Write a JavaScript function that changes the background color of a div with the id 'box' to blue when called.",
  //   codeSnippetSolution: `function changeColor() {
  //     document.getElementById("box").style.backgroundColor = "blue";
  //   }`,
  //   codeSnippetExample: `<button onclick="changeColor()">Change Color</button>`,
  //   imageUrl: "https://via.placeholder.com/300",
  //   explanation: `This task shows DOM manipulation by selecting an HTML element by ID and changing its style.`,
  //   vector: "https://example.com/path-to-vector-icons/dom.svg",
  // },
  // {
  //   id: "9",
  //   title: "Events and Event Handling",
  //   description: "Learn about handling events in JavaScript",
  //   level: "Easy",
  //   theory: true,
  //   example: "Clicking the button triggers: 'Button clicked!'",
  //   question: "Write a function that adds an event listener to a button with the id 'clickMe'. When the button is clicked, display 'Button clicked!' in the console.",
  //   codeSnippetSolution: `document.getElementById("clickMe").addEventListener("click", function() { console.log("Button clicked!"); });`,
  //   codeSnippetExample: `<button id="clickMe">Click Me</button>`,
  //   imageUrl: "https://via.placeholder.com/300",
  //   explanation: `This problem focuses on event handling by adding an event listener to a button.`,
  //   vector: "https://example.com/path-to-vector-icons/events.svg",
  // },
  {
    id: "10",
    title: "Loops and Functions",
    description: "An introduction to loops and their role in performing repeated actions.",
    question: "Demonstrate how to add the first n natural numbers using a for loop in JavaScript. Explain each part of the loop (initialization, condition, and iteration) and describe how they contribute to the loop functionality.",
    level: "Medium",
    theory: true,
    example: `For example, using a For Loop to add the first 'n' natural numbers:
    let sum = 0;
    let n = prompt("Enter number of times to loop");
    for(let i=0; i<n; i++){ sum += (i+1); }`,
    codeSnippetSolution: `let sum = 0;
    let n = prompt("Enter the number of times to run the loop");
    for (let i = 0; i < n; i++) {
      sum += (i + 1);
      console.log("Loop iteration " + i + ": current sum is " + sum);
      }
      console.log("Sum of first " + n + " natural numbers is: " + sum);`,
      explanation: `This entry provides a foundational understanding of loops in JavaScript, specifically the For Loop. The example code demonstrates how a loop can be used to sum the first 'n' natural numbers, illustrating the concepts of initialization, condition, and iteration.`,
      vector: "https://example.com/path-to-vector-icons/loops_and_functions.svg",
    },
    {
      id: "11",
      title: "String Methods in JavaScript",
      description: "Introduction to useful string methods",
      level: "Medium",
      theory: true,
      example: `For example, using .toUpperCase() and .slice() methods:
        let name = "JavaScript";
        console.log(name.toUpperCase()); // Output: "JAVASCRIPT"
        console.log(name.slice(1, 4)); // Output: "ava"`,
        question: "Write a series of operations on a string using .length, .toUpperCase(), .slice(), and .replace(). Begin with a lowercase string, modify it to uppercase, extract a substring from it, and finally replace a portion of the string. Describe how each method changes the string.",
        codeSnippetSolution: `let exampleString = "hello world";
        console.log(exampleString.toUpperCase());  // "HELLO WORLD"
        console.log(exampleString.slice(0, 5));    // "hello"
        console.log(exampleString.replace("world", "JavaScript"));  // "hello JavaScript"`,
        explanation: `This task covers commonly used string methods in JavaScript, such as .length, .toUpperCase(), .slice(), and .replace(). It allows users to manipulate strings in various ways, a key skill for handling text data.`,
        vector: "https://example.com/path-to-vector-icons/string_methods.svg",
      },
      {
        id: "12",
        title: "Array Basics and Methods",
        description: "Learn about arrays and their basic methods in JavaScript",
      level: "Medium",
      theory: true,
      example: `For example, using toString() and join():
        let arr = ["JavaScript", "is", "fun"];
        console.log(arr.toString());  // "JavaScript,is,fun"
        console.log(arr.join(" "));   // "JavaScript is fun"`,
      question: "Use JavaScript array methods .toString() and .join() on an array to manipulate it in different ways. Start with an array of words, convert it into a single string, and join the elements with a custom separator. Additionally, demonstrate how to access individual elements by index.",
      codeSnippetSolution: `let arr = ["JavaScript", "is", "awesome"];
  console.log(arr.toString());     // "JavaScript,is,awesome"
  console.log(arr.join(" - "));    // "JavaScript - is - awesome"
  console.log(arr[1]);             // "is"`,
      explanation: `This entry provides a basic understanding of arrays in JavaScript. It demonstrates how to convert arrays to strings with .toString() and .join(), and how to access elements by index.`,
      vector: "https://example.com/path-to-vector-icons/arrays.svg",
    }
  ];
  