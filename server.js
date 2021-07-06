// Set up express
const express = require(“express”)
const app = express()

// Set up other modules
const bodyParser= require(“body-parser”)
const mongoose= require(“mongoose”)
const logger = require(“morgan”)
const exphbs = require(“express-handlebars”)

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Connect To Database
mongoose.connect(process.env.DB_String)

// Use database
let db=mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function() {
  console.log("Connected to Mongoose")
})

// Use morgan
app.use(logger(“dev”)

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))

// Use handlebars for views
app.engine(“handlebars”, exphbs((defaultLayout, “main”)))
app.set(“view engine”, “handlebars”)

// Use public folder
app.use(express.static(process.cwd() + “/public”))

// Set up port to listen on computer
const port = process.env.PORT|| 3000
app.listen(port)
console.log(`Server listening on PORT:{port}`)
})
