import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import bankroute from "./routes/bank.js";

mongoose.set("strictQuery", false);

app.use(express.json());

app.use(cors());



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


app.listen(8082, () => {
  connect();
  console.log("Connected to the port");
});
