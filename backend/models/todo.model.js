const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'in-progress'],
      default: 'pending',
    },
  },
  {
    timestamps: true, 
  }
);

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
