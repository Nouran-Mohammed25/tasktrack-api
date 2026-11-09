    const express = require('express');
const app = express();
app.use(express.json());

const tasks = [{ id: 1, title: 'Learn Docker', done: false }];

app.get('/', (req, res) => res.json({ status: 'ok', service: 'TaskTrack API' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const task = { id: tasks.length + 1, title: req.body.title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TaskTrack API running on port ${PORT}`));