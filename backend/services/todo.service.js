const Todo = require("../models/todo.model")
const CustomError = require("../utils/customError")

const getTodos = async ({id, status}) => {
    let todos

    if (id) {
        todos = await Todo.findById(id)
    } else if (status && status !== 'all') {
        todos = await Todo.find({ status })
    } else {
        todos = await Todo.find()
    }

    // if (!todos || todos.length === 0) {
    //     throw new CustomError('No todos found', 404)
    // }
    return {
        success: true,
        message: "Todos fetched successfully",
        body: todos,
    }
}
const createTodo = async (data) => {
    const { title, description, status } = data

    if (!title) {
        throw new CustomError('Title is required', 400)
    }

    const todo = await Todo.create({
        title,
        description,
        status,
    })

    return {
        success: true,
        message: "Todo created successfully",
        body: todo,
    }
}

const updateTodo = async (id, data) => {
    const { title, description, status } = data

    const updateData = {}
    if (title) updateData.title = title
    if (description) updateData.description = description
    if (status) updateData.status = status

    const todo = await Todo.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })

    if (!todo) {
        throw new CustomError('Todo not found', 404)
    }

    return {
        success: true,
        message: "Todo updated successfully",
        body: todo,
    }
}

const deleteTodo = async (ids) => {
    const todo = await Todo.deleteMany({ _id: { $in: ids } })

    if (!todo) {
        throw new CustomError('Todo not found', 404)
    }

    // if (todo.deletedCount === 0) {
    //     throw new CustomError('No todos delete', 404)
    // }

    return {
        success: true,
        message: "Todo deleted successfully",
        body: todo,
    }
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo }