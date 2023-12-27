const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/contact', { useNewUrlParser: true, useUnifiedTopology: true });

const indexRoute = require('./routes/index');
const contactsRoute = require('./routes/contacts');
app.use('/', indexRoute);
app.use('/contacts', contactsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
