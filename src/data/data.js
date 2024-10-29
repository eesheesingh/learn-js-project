export const easyCodeData = [
    {
      id: "1",
      title: "JavaScript tutorial for beginners",
      description: "Learn JavaScript from scratch",
      level: "Easy",
      theory: true,
      example: "Input: 'Hello'\nOutput: 5",
      question: "Write a function that takes a string as input and returns the number of characters in the string.",
      codeSnippetSolution: `function countCharacters(str) {
        return str.length;
      }
      
      console.log(countCharacters("Hello")); // Output: 5`,
      codeSnippetExample: `function countCharacters(str) {
        return str.length;
      }
      
      console.log(countCharacters("JavaScript")); // Output: 10
      console.log(countCharacters("Frontend Developer")); // Output: 18`,
      imageUrl: "https://via.placeholder.com/300",
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
      codeSnippetExample: `let age = 25;
      let name = "Alice";
      let isStudent = false;
      let address;
      let empty = null;
      let uniqueID = Symbol("id");
  
      console.log(typeof age);       // "number"
      console.log(typeof name);      // "string"
      console.log(typeof isStudent); // "boolean"
      console.log(typeof address);   // "undefined"
      console.log(typeof empty);     // "object" (null is an object)
      console.log(typeof uniqueID);  // "symbol"`,
      imageUrl: "https://via.placeholder.com/300",
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
      codeSnippetExample: `function calculateOperations(a, b) {
        return {
          addition: a + b,
          subtraction: a - b,
          multiplication: a * b,
          division: a / b,
        };
      }
  
      console.log(calculateOperations(15, 5)); // { addition: 20, subtraction: 10, multiplication: 75, division: 3 }
      console.log(calculateOperations(6, 3));  // { addition: 9, subtraction: 3, multiplication: 18, division: 2 }`,
      imageUrl: "https://via.placeholder.com/300",
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
      codeSnippetExample: `function checkNumber(num) {
        if (num > 0) return "Positive";
        else if (num < 0) return "Negative";
        else return "Zero";
      }
  
      console.log(checkNumber(5));    // "Positive"
      console.log(checkNumber(-10));  // "Negative"
      console.log(checkNumber(0));    // "Zero"`,
      imageUrl: "https://via.placeholder.com/300",
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
      codeSnippetExample: `function printNumbers(n) {
        for (let i = 1; i <= n; i++) {
          console.log(i);
        }
      }
  
      printNumbers(3); // Output: 1 2 3
      printNumbers(7); // Output: 1 2 3 4 5 6 7`,
      imageUrl: "https://via.placeholder.com/300",
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
  
      function demonstrateScope() {
        let variable = "Local Variable";
        console.log("Inside function:", variable);
      }
  
      demonstrateScope();           // Inside function: Local Variable
      console.log("Outside function:", variable); // Outside function: Global Variable`,
      imageUrl: "https://via.placeholder.com/300",
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
        age: 30,
        hobbies: ["cycling", "painting"]
      };
  
      showPersonDetails(user); // Output: John: cycling, painting`,
      imageUrl: "https://via.placeholder.com/300",
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
      }
  
      // HTML: <div id="box" style="width: 100px; height: 100px;"></div>`,
      codeSnippetExample: `<button onclick="changeColor()">Change Color</button>
  
      // In the console, run changeColor(); to change the div color.`,
      imageUrl: "https://via.placeholder.com/300",
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
          });
      
          // HTML: <button id="clickMe">Click Me</button>`,
          codeSnippetExample: `document.getElementById("clickMe").addEventListener("click", function() {
            console.log("Button clicked!");
          });
      
          // HTML:
          // <button id="clickMe">Click Me</button>`,
          imageUrl: "https://via.placeholder.com/300",
        }
    ]