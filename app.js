require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const mongoose = require('mongoose');
// const morgan = require('morgan');
// const cors = require("cors");
// const path = require('path')
// const MongoStore = require('connect-mongo')(session);

//App config
const app = express();
const port = process.env.PORT || 8001

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose.connection;

const sessionOptions = {
  saveUninitialized: false,
  resave: false,
  secret: process.env.SECRET,
  cookie: {
    //secure: true,
    path: '/',
    httpOnly: true,
    maxAge: 2592000000 // 30 x 24 x 60 x 60 x 1000sec   //30 days
  },
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
  name: '_sid',
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // log.info(`Connected to MongoDB: ${db.host}`);
  console.log(`Connected to MongoDB: ${db.host}`);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(morgan('tiny'));
// app.use(cookieParser());
// app.use(session(sessionOptions));

// require('./src/config/passport.js')(app);

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

app.get('/', (req,res) => {
    res.json({msg: "hello world"})
})

const authRoutes = require("./src/routes/auth");
// const postRouter = require("./src/routes/postRoutes")();
// const userRouter = require("./src/routes/userRoutes")();

app.use("/api", authRoutes);
// app.use("/posts", postRouter);
// app.use("/users", userRouter);

app.listen(
  port,
  console.log(`🌎  => server started in ${process.env.NODE_ENV} mode at port ${port}`)
);