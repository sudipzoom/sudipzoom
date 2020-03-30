import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`💛 Listening on ${PORT}`);

app.listen(PORT, handleListening);
