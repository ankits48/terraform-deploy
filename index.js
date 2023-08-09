import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import routes from './src/routers/router.js'
dotenv.config();
const app = express();
const PORT = 3000;

const mySecret = process.env['MONGODB_URI']
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });


//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app)

app.get('/',(req,res)=>{
    res.send(`Node and Express is running on port ${PORT}`);
});

app.listen(PORT,()=>{
    console.log(`Your server is running on port ${PORT}`)
})
