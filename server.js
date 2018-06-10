const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const users = require("./routers/api/users")
const profile = require("./routers/api/profile")
const posts = require("./routers/api/posts")

const app = express()

//Boday parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DB config
const db = require("./config/keys").mongoURI

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.get("/", (req, res) => res.send("hello"))

const port = process.env.PORT || 5000

//use routes
app.use("/api/users", users)
app.use("/api/profile", profile)
app.use("/api/posts", posts)

app.listen(port, () => console.log(`Server running on port ${port}`))
