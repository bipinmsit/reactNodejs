const express = require("express")
const app = express()
const cors = require("cors")

// middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Your serve is created")
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
})