const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./server/db/connect');
require('dotenv').config();
const routes = require('./server/routes/index');

app.use(express.json());
app.use('/api/v1', routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

module.exports = app;
