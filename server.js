const express = require("express");
const app = express();
const PORT = 3000; // You can change the port number if needed

function getRandomTodos() {
  const randomTodos = [];
  const remainingTodos = [...todoList]; // Create a copy of the todoList array
  for (let i = 0; i < 3 && remainingTodos.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * remainingTodos.length);
    randomTodos.push(remainingTodos[randomIndex]);
    remainingTodos.splice(randomIndex, 1); // Remove the selected item from the array
  }
  return randomTodos;
}

// Define route to get random to-do list items
app.get("/random-todos", (req, res) => {
  const randomTodos = getRandomTodos();
  res.json(randomTodos);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const todoList = [
  "Buy groceries",
  "Finish homework",
  "Call mom",
  "Go for a run",
  "Read a book",
  "Do laundry",
  "Write email to client",
  "Pay bills",
  "Clean the house",
  "Take out the trash",
  "Walk the dog",
  "Schedule appointment",
  "Meal prep for the week",
  "Exercise",
  "Study for exam",
  "Water the plants",
  "Organize closet",
  "Watch a movie",
  "Practice a musical instrument",
  "Learn a new recipe",
];
