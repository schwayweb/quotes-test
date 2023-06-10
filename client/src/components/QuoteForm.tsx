import React, { useState, useEffect } from 'react';
import './QuoteForm.css';

interface Quote {
  _id: string;
  quoteText: string;
  authorName: string;
}

interface Props {
  onAdd: (quoteText: string, authorName: string) => void;
  onUpdate: (quote: Quote) => void;
  quoteToEdit: Quote | null;
}

const QuoteForm: React.FC<Props> = ({ onAdd, onUpdate, quoteToEdit }) => {
  const [quoteText, setQuoteText] = useState('');
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    if (quoteToEdit) {
      setQuoteText(quoteToEdit.quoteText);
      setAuthorName(quoteToEdit.authorName);
    }
  }, [quoteToEdit]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteToEdit) {
        onUpdate({ ...quoteToEdit, quoteText, authorName });
      } else {
        onAdd(quoteText, authorName);
      }
      setQuoteText('');
      setAuthorName('');
    };
  
    return (
      <form onSubmit={onSubmit}  className="form-container">
        <input
          type="text"
          placeholder="Quote Text"
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">{quoteToEdit ? 'Update' : 'Add'}</button>
      </form>
    );
  };
  
  export default QuoteForm;