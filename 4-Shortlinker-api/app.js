import express from "express"
import "dotenv/config"
import shortRoute from "./routes/route.js"

const app = express()

app.use(express.json())
app.use("api/v2", shortRoute)

const server = async () => {
    try {
      app.listen(process.env.PORT, () => {
        console.log(`Server running. Use API on port: ${process.env.PORT}`);
      })
    } catch (e) {
      process.exit(1);
    }
  }
  
  server();