const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gameRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');
const cors = require("./middlewares/cors");
const connectToDatabase = require('./database/connect');
const cookieParser = require("cookie-parser");

const PORT = 3001;
const app = express();
connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    cookieParser(), 
    express.static(path.join(__dirname, "public")),
    pagesRouter,
    apiRouter,
);


app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});








