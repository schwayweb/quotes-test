import { Request, Response } from 'express';
import Quote from '../models/quote.model.js';

export const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  }catch (error) {
    res.status(500).json({ message: 'Error retrieving quotes', error });
  }
};

export const addQuote = async (req: Request, res: Response) => {
  const { quoteText, authorName } = req.body;

  if (!quoteText || !authorName) {
    res.status(400).json({ message: 'Both quote and author are required' });
    return;
  }

  const quote = new Quote({ quoteText, authorName });

  try {
    const savedQuote = await quote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(500).json({ message: 'Error saving quote', error });
  }
};

export const updateQuote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedQuote = await Quote.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: 'Error updating quote', error });
  }
};

export const deleteQuote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const removedQuote = await Quote.findByIdAndRemove(id);

    if (!removedQuote) {
      res.status(404).json({ message: 'Quote not found' });
      return;
    }

    res.json(removedQuote);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting quote', error });
  }
};