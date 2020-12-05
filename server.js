const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 8080
 
// CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  next()
}

// parse requests of content-type - application/json
app.use(allowCrossDomain)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ message: "Welcome to   application." })
})

require("./app/routes/BooksRoute")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})