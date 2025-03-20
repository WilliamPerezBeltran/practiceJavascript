import express from 'express';
import userRoutes from './routes/user.routes';
import cors from 'cors';

const app = express();

app.use(cors());
// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

export default app;

