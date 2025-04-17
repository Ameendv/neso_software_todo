import React,{useContext, useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import service from "../services/todoService";
import { Button, MenuItem, Paper, Select } from "@mui/material";
import { TodoContext } from "../context/context";


function TodoList({ todos }) {
    const navigate = useNavigate();
    const { fetchTodos, getTodoByStatus } = useContext(TodoContext);
    const [status, setStatus] = useState('all');
    console.log(status)


    const OnEdit = (id) => {
        console.log("Edit Todo with ID:", id);
        navigate(`/edit/${id}`);
        // Implement your edit logic here
    }

    const onDelete = (id) => {
        if (confirm("Are you sure you want to delete this todo?")) {
            service.deleteTodo(id)
                .then(() => {
                    alert("Todo deleted successfully!");
                    fetchTodos()
                })
                .catch((error) => {
                    console.error("Error deleting todo:", error);
                    alert("Failed to delete todo.");
                });
        }
    }

    const handleFilterChange = (event) => {
        const selectedStatus = event.target.value;
        setStatus(selectedStatus);
        getTodoByStatus(selectedStatus);
        console.log("Selected status:", selectedStatus);

    }

    const handleStatusChange = (id, newStatus) => {
        console.log("Change status of Todo with ID:", id, "to", newStatus);
        service.updateTodo(id, { status: newStatus })
            .then(() => {
                alert("Todo status updated successfully!");
                fetchTodos()
            })
            .catch((error) => {
                console.error("Error updating todo status:", error);
                alert("Failed to update todo status.");
            });
        // Implement your status change logic here
    }

    const columns = [
        { field: 'id', headerName: '#', width: 60 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'description', headerName: 'Description', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 500,
            renderCell: (params) => (
                <>
                    <Button variant="contained" color="warning" size="small" onClick={() => OnEdit(params.row._id)}>
                        Edit
                    </Button>
                    <Button variant="contained" color="error" size="small" style={{ marginLeft: 8 }} onClick={() => onDelete(params.row._id)}>
                        Delete
                    </Button>
                    <Select
                        value={params.row.status}
                        onChange={(e) => handleStatusChange(params.row._id, e.target.value)}
                        size="small"
                        style={{ marginLeft: 8, width: 120 }}
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="in-progress">In Progress</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                    </Select>

                </>
            ),
          },
    ]

    const rows = todos.map((todo, index) => ({
       id: index + 1,
       _id: todo._id,   
        title: todo.title,
        description: todo.description,
        status: todo.status,
      }));

    

    return (
        <Paper sx={{
            width: '100%',
            maxWidth: '1500px',
            margin: 'auto',
            padding: 2,
            height: '100%',
          }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h5>Todo</h5>
        
                <Select
                    value={status}
                    onChange={handleFilterChange}
                    size="small"
                    style={{ marginLeft: 8, width: 120 }}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="in-progress">In Progress</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                </Select>
     
      </div>
       
        <DataGrid
        rows={rows}
        columns={columns}
       
      />
      </Paper>
    );
}
export default TodoList;