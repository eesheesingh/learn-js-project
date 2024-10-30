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
    codeSnippetExample: `console.log(countCharacters("JavaScript")); // Output: 10
    console.log(countCharacters("Frontend Developer")); // Output: 18`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `In this task, you create a function to count characters in a string using JavaScript. The function uses the '.length' property of the string to return its length, showing a basic function structure and string properties.`,
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
    codeSnippetSolution: `let num = 42;
    let str = "Hello";
    let bool = true;
    let undef;
    let nul = null;
    let sym = Symbol("symbol");

    console.log(typeof num, typeof str, typeof bool, typeof undef, typeof nul, typeof sym);`,
    codeSnippetExample: `console.log(typeof 25);  // "number"
    console.log(typeof "JavaScript"); // "string"
    console.log(typeof false);  // "boolean"`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise covers JavaScript data types: number, string, boolean, undefined, null, and symbol. It helps in understanding variable declarations and the use of 'typeof' to check the data type.`,
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
    codeSnippetSolution: `function calculateOperations(a, b) {
      return {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b,
      };
    }
  
    console.log(calculateOperations(10, 2));`,
    codeSnippetExample: `console.log(calculateOperations(15, 5)); // { addition: 20, subtraction: 10, multiplication: 75, division: 3 }`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task explores arithmetic operators by creating a function to perform and return basic operations (addition, subtraction, etc.) on two inputs. This helps reinforce operator usage.`,
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
    codeSnippetExample: `console.log(checkNumber(5));    // "Positive"
    console.log(checkNumber(0));    // "Zero"`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise introduces control flow, specifically if/else statements. It demonstrates how to use conditions to categorize inputs, a foundational concept in logic-based programming.`,
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
    codeSnippetExample: `printNumbers(3); // Output: 1 2 3
    printNumbers(7); // Output: 1 2 3 4 5 6 7`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task highlights loops, focusing on the 'for' loop to print numbers up to a specified integer. Loops allow repetitive actions, which is critical for managing arrays and repetitive tasks.`,
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
    console.log("Outside function:", variable); // Outside function: Global Variable`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This exercise explains scope in JavaScript. It highlights how global and local scopes determine variable access, depending on where the variable is declared.`,
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
    codeSnippetExample: `const user = {
      name: "John",
      hobbies: ["cycling", "painting"]
    };
  
    showPersonDetails(user); // Output: John: cycling, painting`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task demonstrates objects and arrays by creating a 'person' object with properties and hobbies. Arrays hold multiple values, and objects hold multiple properties, forming data structures in JavaScript.`,
    vector: "https://example.com/path-to-vector-icons/objects.svg",
  },
  {
    id: "8",
    title: "DOM Manipulation",
    description: "How to manipulate the DOM in JavaScript",
    level: "Easy",
    theory: true,
    example: "Output: <div id='box' style='background-color: blue'></div>",
    question: "Write a JavaScript function that changes the background color of a div with the id 'box' to blue when called.",
    codeSnippetSolution: `function changeColor() {
      document.getElementById("box").style.backgroundColor = "blue";
    }`,
    codeSnippetExample: `<button onclick="changeColor()">Change Color</button>
    // Run changeColor(); to change the div color.`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This task shows DOM manipulation. By selecting an HTML element by ID and changing its style, you learn how JavaScript can dynamically update the content and appearance of web pages.`,
    vector: "https://example.com/path-to-vector-icons/dom.svg",
  },
  {
    id: "9",
    title: "Events and Event Handling",
    description: "Learn about handlingHere’s the remaining data entry:"
  },
  {
    id: "9",
    title: "Events and Event Handling",
    description: "Learn about handling events in JavaScript",
    level: "Easy",
    theory: true,
    example: "Clicking the button triggers: 'Button clicked!'",
    question: "Write a function that adds an event listener to a button with the id 'clickMe'. When the button is clicked, display 'Button clicked!' in the console.",
    codeSnippetSolution: `document.getElementById("clickMe").addEventListener("click", function() {
      console.log("Button clicked!");
    });`,
    codeSnippetExample: `<button id="clickMe">Click Me</button>
    document.getElementById("clickMe").addEventListener("click", function() {
      console.log("Button clicked!");
    });`,
    imageUrl: "https://via.placeholder.com/300",
    explanation: `This problem focuses on event handling, a core feature of web interactivity. By adding an event listener to a button, we learn how JavaScript responds to user actions, making applications interactive and dynamic.`,
    vector: "https://example.com/path-to-vector-icons/events.svg"
  }
];
