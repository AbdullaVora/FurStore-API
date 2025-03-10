const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const productRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoute.js');
const database = require('./config/database');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const corsOptions = {
    origin: [
        'http://localhost:5173', // Local React App (dev)
        'http://localhost:5174', // Local React App (dev)
        'http://localhost:3000',  // Another Local React App (dev)
        'https://furn-store-xi.vercel.app',
        'https://e-commerce-admin-pearl-gamma.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies or authorization headers (if needed)
};

app.use(cors(corsOptions));  // Apply the CORS middleware
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use("/api/product", productRoute)
app.use("/api/user", userRoute)

app.get('/', (req, res) => {
    res.send("FurStore API is running perfect")
})

app.listen(PORT, (err) => {
    if (err) throw err;
    else database()
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})