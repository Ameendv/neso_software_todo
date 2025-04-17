const express = require("express");
const router = express.Router();
const todoServices = require("../services/todo.service");
const validateRequest = require("../middlewares/validateRequest");
const Joi = require("joi");

router.get("/", async (req, res, next) => {
    try {

        const response = await todoServices.getTodos(req.query)
        res.status(200).json({
            success: true,
            body: response.body,
            message: response.message
        })
    } catch (error) {
        next(error)
    }
})

router.post("/", todoSchema, async (req, res, next) => {
    try {

        const response = await todoServices.createTodo(req.body)
        res.status(200).json({
            success: true,
            body: response.body,
            message: response.message
        })
    } catch (error) {
        next(error)
    }
})

router.put("/:todo_id", async (req, res, next) => {
    try {

        const response = await todoServices.updateTodo(req.params.todo_id, req.body)
        res.status(200).json({
            success: true,
            body: response.body,
            message: response.message
        })
    } catch (error) {
        next(error)
    }
})

router.delete("/", async (req, res, next) => {
    try {

        const response = await todoServices.deleteTodo(req.body.ids)
        res.status(200).json({
            success: true,
            body: response.body,
            message: response.message
        })
    } catch (error) {
        next(error)
    }
}
)

function todoSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        status: Joi.string(),
    })
    validateRequest(req, next, schema);
}

module.exports = router;