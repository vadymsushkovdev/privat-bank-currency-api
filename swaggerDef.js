const path = require('path');

module.exports = {
    openapi: '1.0.0',
    info: {
        title: 'privat-bank-currency-api',
        version: '1.0.0',
        description: 'This parser is getting currency every one hour using Node.js, Express, Mongodb API and TypeScript 3.',
    },
    servers: [
        { url: `http://localhost:${process.env.PORT}` }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
