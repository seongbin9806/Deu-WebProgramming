const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 7773;
const app = express();

const users = {};

app.use((req, res, next) => {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${req.method} ${req.url}`);
    next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './', '02-rest-front.html'));
});

// app.get('/about');
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const { name } = req.body;
    const id = Date.now().toString();
    users[id] = name;

    res.status(201).json({ message: 'User added!', id });
});

app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (user[id]) {
        user[id] = name;
        res.json({ message: 'User updated!!' });
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
});

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (user[id]) {
        delete user[id];
        res.json({ message: 'User Deleted!!' });
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});