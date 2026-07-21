const express = require('express')

const app = express()

app.get('/home', (req, res) => {
      res.send("Wellcome to home page")
})

app.listen(3000, () => {
      console.log("server is runnig on port 3000")
})