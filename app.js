const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const googleRoutes = require('./routes/googleRoutes');
const db = require('./db/db');

const app = express();
const PORT = process.env.PORT || 9801;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

//health
app.get('/health', (req,res) => {
    res.send("Health is OK!!")
})

//to router
app.use('/users', userRoutes)
app.use('/auth/google', googleRoutes)

//Server Connection
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})