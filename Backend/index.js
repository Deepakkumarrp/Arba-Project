const express = require("express");
const {connection} = require("./config/db");
const { User } = require("./Model/user.model");
const { userRouter } = require("./Routes/user.routes");
const { todoRouter } = require("./Routes/todo.routes");
const app = express();
app.use(express.json());



app.use('/users',userRouter);
app.use('/todos',todoRouter);

app.get('/',(req,res) => {
    res.send("Hello from /")
})


app.listen(3000, async() => {
    try{
        await connection;
        console.log("connected to db")
        console.log("Server is running at 3000.")
    }catch(err){
        console.log(err);
    }
})