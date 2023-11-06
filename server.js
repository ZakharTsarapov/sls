import app from "./app.js"
import 'dotenv/config';

const server = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server running. Use our API on port: ${process.env.PORT}`);
        })
    } catch (erorr) {
        process.exit(1)
    }
}

server();