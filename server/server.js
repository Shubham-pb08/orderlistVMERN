require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./routers/auth-router')
const contactRouter = require('./routers/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', authRouter);
app.use('/api/form', contactRouter);


app.get('/', (req, res) => {
    res.status(200).send("This is working");
})
app.use(errorMiddleware);

connectDB().then(()=> {
app.listen('5000', () => {
    console.log("Server is running on port 5000");
    })   
});