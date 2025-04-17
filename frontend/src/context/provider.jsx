import { useState, useEffect } from "react";
import { TodoContext } from "./context";
import services from "../services/todoService";

function Provider({ children }) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTodos = async () => {
        setLoading(true);
        try {
            const data = await services.getTodos();
            setTodos(data.body);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const getTodoByStatus = async (status) => {
        setLoading(true);
        try {
            const data = await services.getTodosByStatus(status);
            setTodos(data.body);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, loading, error, fetchTodos, getTodoByStatus }}>
            {children}
        </TodoContext.Provider>
    )
}

export default Provider;