const express = require("express");
const { Todo } = require("../Model/todo.model");

const todoRouter = express.Router();

todoRouter.get('/',async (req,res) => {
    const data = await Todo.find({});
    res.status(200).json({data});
})

module.exports = {
    todoRouter
}