//To create a server it must have:
//1. install and require express
//2. const app = express() to give an instance of the express framework
//3. the json parser: app.use(express.json())
//4. the listen statement: app.listen(port number here, () => console.log('server running on port number here'));
//5. run nodemon to have the server listen for requests.

//Express is the framework we use to build a server, to install run: npm i express
const express = require('express');
//cors allows requests from other origins(this allows postman to request our server)
const cors = require('cors');

//invoking express gives us an instance of our express framework
const app = express();

//This is the data for our API
const users = [
    {id: 0, name: 'Matt'},
    {id: 1, name: 'Matias'},
    {id: 2, name: 'Lucas'}
];

//This statement parses JSON into JavaScript and back
app.use(express.json());
//Invoke cors to allow outside requests
app.use(cors());

//endpoint methods come from our express frame work, following the CRUD methodology. Passed into the method is: 1. The endpoint (where a request can be made) and 2. a handler function to handle the request and create a response. Req and Res must be included in the handler function.
app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/api/user/:id', (req, res) => {
    const {id} = req.params;

    let selectedUser = users.find(element => element.id === +id);
    res.status(200).send(selectedUser);
})

app.post('/api/user', (req, res) => {
    users.push(req.body);
    res.status(200).send(users);
})

//listen lets the server listen for requests on the listed port number
app.listen(3334, () => console.log('Server running on 3334'));