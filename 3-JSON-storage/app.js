import express from "express";
import "dotenv/config";
import jsonRouter from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api", jsonRouter);

const server = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running. Use API on port: ${process.env.PORT}`);
    })
  } catch (e) {
    process.exit(1);
  }
}

server();