const express = require('express');
const mongoose = require('mongoose');

// user auth
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// app
const app = express();

// user database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("UserDB is connected"))
  .catch((err) => console.log(err));

// database
const db = require('./config/keys').mongoURI;

// import routes
const questions = require('./routes/api/questions');
const authRoutes = require('./routes/auth');

// any additional routes import here
const users = require('./routes/api/users');
const yelp = require('./routes/api/yelp');
const googleActivities = require('./routes/api/googleActivities');
const googlePhoto = require('./routes/api/googlePhoto');
const accuweather = require('./routes/api/weather');
const city = require('./routes/api/city');

// connecting to mongoDB using mongoose
// mongoose
//     .connect(db, { 
//         useNewUrlParser: true,
//         useCreateIndex: true, 
//         useUnifiedTopology: true })
//     .then(() => console.log('MongoDB is connected'))
//     .catch(err => console.log(err))

// middlewares
// parsing all incoming req and outgoing res to json
app.use(express.json());
// app.use(bodyParser.json());
app.use(cors());

// create a route
app.get('/', (req, res) => res.send("App is working!"))

// routes middleware
app.use('/api/questions', questions);
app.use('/api', authRoutes);
// any additional routes add here
app.use('/api/users', users);
app.use('/api/yelp', yelp);
app.use('/api/google/activities', googleActivities);
app.use('/api/google/photo', googlePhoto);
app.use('/api/accuweather', accuweather);
app.use('/api/city', city);

// connecting our ports
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));