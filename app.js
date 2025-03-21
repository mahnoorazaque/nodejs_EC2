const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.static('public'));

// Routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

app.use('/', indexRoute);
app.use('/about', aboutRoute);

// Start Server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on ${PORT}`));
