import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import services from "../services/todoService";


function EditToDo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            services.getTodoById(id)
                .then((response) => {
                    const todo = response.body;
                    setTitle(todo.title);
                    setDescription(todo.description);
                })
                .catch((error) => {
                    console.error("Error fetching todo:", error);
                });
        }
    }
        , [id]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const todo = { title, description };
        services.updateTodo(id, todo)
            .then(() => {
                setTitle("");
                setDescription("");
                alert("Todo updated successfully!");
                navigate('/home')
            })
            .catch((error) => {
                console.error("Error updating todo:", error);
                alert("Failed to update todo.");
            });
    }
    return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            px: 2,
            height: "100vh",           
            width: "100vw",  
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      );
  
}

export default EditToDo;