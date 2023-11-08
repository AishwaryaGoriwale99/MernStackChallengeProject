// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost/mern-task-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Task schema and model (in a separate file, if preferred)
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// API endpoints
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, completed } = req.body;
  const task = new Task({ title, completed });
  await task.save();
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
