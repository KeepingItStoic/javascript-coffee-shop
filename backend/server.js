// Ch 16: Node.js backend for the coffee shop cart.
// Run from this folder with:  node server.js   (or F5 in VS Code > Node.js)
// Then visit http://127.0.0.1:3000/

const http = require("http")

const hostname = "127.0.0.1"
const port = 3000

// TODO (Ch 16): in-memory cart object

const server = http.createServer((req, res) => {
    // TODO (Ch 16): parse req.url and switch on the pathname
    //   "/cart" GET  -> return the cart as JSON
    //   "/cart" POST -> read the body in chunks, add the item, reply {success: true}
    //   default      -> 404

    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Coffee shop backend is running.")
})

server.listen(port, hostname, () => {
    console.log(`Node.js is listening at http://${hostname}:${port}/`)
})
