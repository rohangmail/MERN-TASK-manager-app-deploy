const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', TaskRouter)

app.use('/',(req , res)=>{
    res.send('hello from the server')
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
});