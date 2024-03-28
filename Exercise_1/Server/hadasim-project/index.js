import express from "express";
import { config } from "dotenv";
import cors from "cors"
import { connectTodb } from "./config/DBconnection.js";
import memberRouter from "./routes/member.js"


config();
connectTodb();
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/members", memberRouter)


let port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
