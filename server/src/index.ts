import express from "express"
import child_process from "child_process"

const app = express()

const PORT = 8580
const HOST = '0.0.0.0'

app.get("/api", (_, res) => {
    const filePaths = String(child_process.execSync('find "./sourcecode" -not -path "*node_modules*" -not -path "*.git*"'))
                            .split('\n')
                            .map(string => string.substring(3))
                            .filter(string => string.length > 0)
    res.send(JSON.stringify(filePaths))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at${HOST}:${PORT}`)
})
