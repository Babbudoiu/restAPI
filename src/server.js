require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/user.routes");
const movieRouter = require("./routes/movie.routes");

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});