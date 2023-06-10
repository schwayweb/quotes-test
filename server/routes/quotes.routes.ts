import express from 'express';
import {
  getAllQuotes,
  addQuote,
  updateQuote,
  deleteQuote
} from '../controllers/quotes.controller.js';

const router = express.Router();

router.get('/', getAllQuotes);
router.post('/', addQuote);
router.put('/:id', updateQuote);
router.delete('/:id', deleteQuote);

export default router;