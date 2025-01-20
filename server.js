const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes/routes.js');
const database = require('./config/database');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(router); 

app.listen(PORT, (err) => {
    if (err) throw err;
    else database()
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})