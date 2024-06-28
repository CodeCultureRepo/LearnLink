const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET endpoint to retrieve user credentials
app.get('/credentials', (req, res) => {
  res.json({
    username: 'sampleUser',
    password: 'samplePassword'
  });
});

// POST endpoint to collect information
app.post('/collect', (req, res) => {
  res.json({
    message: 'Information has been collected'
  });
});

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API. Navigate to /api-docs for API documentation.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
