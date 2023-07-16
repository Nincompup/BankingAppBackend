import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import router from './routes/auth.js';
import bankroute from "./routes/bank.js";
import authroute from "./routes/auth.js";
import bodyParser from 'body-parser';
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '500mb'}))

// app.use(cors());



const connect = () => {
  mongoose
    .connect("mongodb+srv://Nincompup:radsappu45@cluster0.mbtjghg.mongodb.net/omdb?retryWrites=true&w=majority")
    .then(() => console.log("Connection Successful...."))
    .catch((err) => console.log(err));
};

app.get("/", (req, res) => {
  res.json({
    status: "SUCCESS",
    msg: "Welcome to banking app"
  })
})

app.use("/api/details", bankroute);
app.use("/api/auth", authroute);


app.listen(8082, () => {
  connect();
  console.log("Connected to the port");
});
