require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const empregadoRoutes = require('./routes/empregado');
const connectionMongoDB = require('./config/db');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
    connectionMongoDB();
}

app.use('/api/empregados', empregadoRoutes);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({
        erro: 'Erro interno do servidor',
    })
})

module.exports = app;