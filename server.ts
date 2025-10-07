import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import { logger } from './middlewares/logger';
import productRoutes from './routes/ProductRoutes'; 

const app = express();

app.use(express.json());
app.use(logger); // Middleware global

app.use('/users', userRoutes);
app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log('Servidor TS rodando na porta 3000 XD');
});
