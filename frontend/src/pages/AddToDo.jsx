import React, { useState } from "react";
import { Box, TextField, Button } from '@mui/material';
import services from "../services/todoService";


function AddToDo() {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { title, description };
        services.createTodo(todo)
            .then(() => {
                setTitle("");
                setDescription("");
                alert("Todo added successfully!");
            })
            .catch((error) => {
                console.error("Error adding todo:", error);
                alert("Failed to add todo.");
            });
    }
    return (<Box
        component="form"
        sx={{ display: 'flex', flexDirection:'column', gap: 2, width: '1000px', mx: 'auto', mt: 5 }}
        onSubmit={handleSubmit}
    >
        <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />

        <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
        />

        <Button variant="contained" color="primary" type="submit">
            Add Todo
        </Button>
    </Box>
    )
}

export default AddToDo;