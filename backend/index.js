const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successful'))
  .catch((err) => {
    console.log(err);
  });

// allows JSON data in a request and parses incoming JSON requests and puts the parsed data in req
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log('Backend server is running!');
});
