// what is env ?
/* **  DOTENV FILE **
  * The dotenv file is used to store environment variables in a key-value format.
  * It allows you to define configuration settings for your application without hardcoding them into your codebase.
  * This is particularly useful for sensitive information like API keys, database credentials, and other configuration settings.
*/

/**
dot git ignore file:- esme ham jis file ka path/name daal diye wo file git pe push nhi hoga.

Use :- It is used to avoid sharing unnecessary large files on git hub, like fiel : Node_Modules.
*/


const express = require('express')
require('dotenv').config() // Load environment variables from .env file
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.port ,()=> //yaha port number env file se lakar use kiye hai
  console.log("Example app listening")
)


app.listen(process.env.port || 3000 ,()=> //yadi env wala port nhi aaya then default me 3000 port use ho jayega
  console.log("Example app listening")
)