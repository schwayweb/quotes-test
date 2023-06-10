import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';

const serverUrl = 'http://38.17.49.5:3001/api/quotes';

    interface Quote {
    _id: string;
    quoteText: string;
    authorName: string;
    }

    const App: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [quoteToEdit, setQuoteToEdit] = useState<Quote | null>(null);

    useEffect(() => {
    fetchQuotes();
    }, []);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(serverUrl);
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error instanceof Error ? error.message : '');
    }
  };

  const handleAddQuote = async (quoteText: string, authorName: string) => {
    try {
      const response = await axios.post(serverUrl, { quoteText, authorName });
      console.log(response)
      setQuotes([...quotes, response.data]);
    } catch (error) {
      console.error('Error adding quote:', error instanceof Error ? error.message : '');
    }
  };

  const handleEditQuote = (quote: Quote) => {
    setQuoteToEdit(quote);
  };

  const handleUpdateQuote = async (updatedQuote: Quote) => {
    try {
      await axios.put(`${serverUrl}/${updatedQuote._id}`, updatedQuote);
      const updatedQuotes = quotes.map((quote) =>
        quote._id === updatedQuote._id ? updatedQuote : quote
      );
      setQuotes(updatedQuotes);
    } catch (error) {
      console.error('Error updating quote:', error instanceof Error ? error.message : '');
    }
    setQuoteToEdit(null); // Reset the quoteToEdit state after a successful update
  };

  const handleDeleteQuote = async (id: string) => {
    try {
      await axios.delete(`${serverUrl}/${id}`);
      const updatedQuotes = quotes.filter((quote) => quote._id !== id);
      setQuotes(updatedQuotes);
    } catch (error) {
      console.error('Error deleting quote:', error instanceof Error ? error.message : '');
    }
  };

  return (
    <div>
      <QuoteForm onAdd={handleAddQuote} onUpdate={handleUpdateQuote} quoteToEdit={quoteToEdit} />
      <QuoteList
        quotes={quotes}
        onEdit={handleEditQuote}
        onDelete={handleDeleteQuote}
      />
    </div>
  );
};
  
  export default App;