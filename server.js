const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// links file resources to localhost
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.  Visit: http://localhost:3001`);
});

