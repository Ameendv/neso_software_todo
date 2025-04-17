import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


function TodoItem({ todo, onDelete }) {

    const navigate = useNavigate();

    const columns = [
        // { field: 'id', headerName: '#', width: 60 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'description', headerName: 'Description', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 }
    ]

    const rows = products.map((product, index) => ({
       
        title: todo.title,
        description: todo.description,
        status: todo.status,
      }));

    const OnEdit = (id) => {
        console.log("Edit Todo with ID:", id);
        navigate(`/edit/${id}`);
        // Implement your edit logic here
    }

    return (
        // <div>
        //     <h2>{todo.title}</h2>
        //     {todo.description && <p>{todo.description}</p>}
        //     <p>Status: <strong>{todo.status}</strong></p>
        //     <button onClick={() => onDelete(todo.id)}>Delete</button>
        //     <button onClick={() => OnEdit(todo._id)}>Edit</button>
        //     <button onClick={() => onDelete(todo.id)}>Change</button>
        // </div>
        <DataGrid
        rows={rows}
        columns={columns}
        // pagination
        // paginationMode="server"  // Enable server-side pagination
        // rowCount={count}     // Total rows from API
        // pageSizeOptions={[5, 10, 25]}
        // paginationModel={{ page: currentPage - 1, pageSize }} // Use dynamic state
        // onPaginationModelChange={(model) => {
        //   setCurrentPage(model.page + 1);
        //   setPageSize(model.pageSize);
        // }}
        // checkboxSelection
        // sx={{ border: 0 }}
      />
    );
}
export default TodoItem;