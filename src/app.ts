
import express from 'express';
import cors from 'cors';
import ROUTES from './routes/index'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './config/swaggerConfig';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));
app.use('/api/v1/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/v1/', ROUTES)


export default app