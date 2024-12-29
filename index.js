const bodyParser = require('body-parser');
const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);


sequelize
    .sync() // Use `.sync({ force: true })` for table re-creation during development
    .then(() => {
        console.log('Database connected and synced');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error('Database connection failed:', err));