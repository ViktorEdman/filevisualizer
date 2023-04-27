import express from "express"

const app = express()
const port = 3000

app.use(express.static("frontend/dist"))

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Hello world." })
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})