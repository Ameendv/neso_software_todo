import { React, useContext, useEffect } from "react";
import { TodoContext } from "../context/context";
import TodoList from "../components/TodoList";
import { CircularProgress, Box, Typography } from '@mui/material';


function Home() {



    const { todos, loading, error, fetchTodos } = useContext(TodoContext)
    useEffect(() => {
        fetchTodos();
    }
        , []);

        if (loading) {
            return (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="50vh"
                width={"100%"}
                sx={{ backgroundColor: '#f5f5f5', padding: 2 }}
              >
                <CircularProgress />
                <Typography variant="body2" sx={{ mt: 2 }}>Loading todos...</Typography>
              </Box>
            );
          }

    return (
        <div className="home" style={{
          border: "1px solid",
          height: "100vh",           
          width: "100vw",  
          boxSizing: "border-box",   
          padding: "16px",           
          overflowY: "auto",         
        }}>
            <TodoList todos={todos} />
        </div>
    );
}

export default Home;