const express = require('express');
const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Middware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mounting routes from server/api.js
const apiRouter = require('./server/api');
app.use('/api', apiRouter);


// This conditional is here for testing purposes:
if (!module.parent) {
  app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
  })
}