import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL

const getTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

const getTodosByStatus = async (status) => {
    try {
        const response = await axios.get(`${API_URL}/?status=${status}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos by status:', error);
        throw error;
    }
}



const getTodoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todo:', error);
        throw error;
    }
}

const createTodo = async (todo) => {
    try {
        const response = await axios.post(API_URL, todo);
        return response.data;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
}

const updateTodo = async (id, todo) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, todo);
        return response.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
}
const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/`, { data: { ids: [id] } });
        return response.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
}
const todoService = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodosByStatus
};

export default todoService;