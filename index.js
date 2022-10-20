const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

//Midle Ware 
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Md. Sadikur Rahman', email: 'Sadik@gmail.com', phone: 01715925172},
    {id: 2, name: 'Md. Shakil Khan', email: 'Shakil@gmail.com', phone: 01815925169},
    {id: 3, name: 'Md. Kawsar Rahman', email: 'Kawsar@gmail.com', phone: 01615925185},
]

app.get('/', (req, res) => {
    res.send('Hey This is From First Node Server')
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const user = users.find(uid => uid.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log('Server is Running on port', port);
})