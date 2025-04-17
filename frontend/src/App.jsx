import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import AddTodo from "./pages/AddTodo";
import Provider from "./context/provider";
import AddToDo from "./pages/AddToDo";
import EditToDo from "./pages/EditTodo";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <Provider>
      
      <Router>
      <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Todo App</Typography>
        <div>
          <Button color="inherit" component={Link} to="/home" sx={{ marginRight: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Todo
          </Button>
        </div>
      </Toolbar>
    </AppBar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddToDo />} /> 
         <Route path="/edit/:id" element={<EditToDo />} />  

        </Routes>
      </Router>
      
    </Provider>

  );
}



export default App;
