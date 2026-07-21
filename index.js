const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/home', (req, res) => {
      res.send("Wellcome to home page")
})

app.listen(process.env.PORT, () => {
      console.log("server is runnig on port 3000")
})