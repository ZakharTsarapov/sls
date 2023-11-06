import app from "./app.js"

const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        })
    } catch (erorr) {
        process.exit(1)
    }
}

server();