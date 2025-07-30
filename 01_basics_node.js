/**
 * The JavaScript runtime environment refers to the platform or context in which JavaScript code is executed.
 * Common JavaScript runtime environments include web browsers (such as Chrome, Firefox, or Safari) and Node.js.
 * Each environment provides its own set of APIs and features that JavaScript code can interact with.
 */
/**
 * Example: JavaScript vs. Other Programming Languages (based on runtime environment)
 */

// JavaScript (runs in browser or Node.js)
// console.log("Hello from JavaScript!");

// Python (runs in Python interpreter)
// print("Hello from Python!")

// Java (runs on Java Virtual Machine)
// System.out.println("Hello from Java!");

/*
    JavaScript code can run directly in browsers or Node.js without compilation,
    while other languages like Python or Java require their own runtime environments.
*/


const express = require('express')
require('dotenv').config() // Load environment variables from .env file
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/student', (req, res) => {
    // res.send(greet());
    res.send("HE")
   
})



// app.listen(port, () => {
//   console.log("Example app listening")
// })






app.listen(process.env.port ,()=>
  console.log("Example app listening")
)

