import express from 'express';
import cors from 'cors';
import connectMongoDB from './config/db.js';
import quotesRoutes from './routes/quotes.routes.js';

const app = express();
connectMongoDB();

app.use(express.json());
app.use(cors());
app.use('/api/quotes', quotesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});