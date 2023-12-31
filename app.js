import express from "express";
import cors from 'cors';
import logger from "morgan"
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoures.js";

const app = express()
const formatsLogger = app.get('env') === 'development' ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter)
app.use("/user", userRouter)

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });
  
  app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
  });

export default app;