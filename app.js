import express from "express";
import knex from "knex";
import bodyParser from "body-parser";
import config from "./config.js"
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import addressRoute from "./routes/addressRoute.js"


dotenv.config();
const app = express();
const port = process.env.PORT;


//db connection knex-mssql
const db = knex(config);
app.use((req, res, next) => {
  req.db = db;
  next();
})

//body den alınan istekler olmuyodu boy - parser yükledim 
app.use(bodyParser.json()); //app.use(bodyParser.urlencoded({ extended: false }))

// app.use("/user", async (req, res, next) => {
//   let users = await req.db("Member").select().catch(console.error);
//   res.json(users);

// })

app.use("/auth", authRoute);
app.use("/user", userRoute)
app.use("/address", addressRoute)

app.listen(port, () => {
  console.log(`application runing on port: ${port}`)
});