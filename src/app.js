const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { config } = require('dotenv');

const app = express();
config();

const cors = require('cors');
const morgan = require('morgan');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Tokens Marketplace API',
      version: '1.0.0',
      description: 'Tokens Marketplace API Information',
      contact: {
        name: 'NFT Marketplace API',
      },
    },
  },
  apis: ['src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const routes = require('./routes/index');

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

const sv = app.listen(PORT, () => {
  console.log(`app runnig on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  sv.close(() => {
    console.log('Http server closed.');
  });
});
