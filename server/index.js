import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
