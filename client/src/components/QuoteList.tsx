import React from 'react';
import QuoteItem from './QuoteItem';
import './QuoteList.css';

interface Quote {
  _id: string;
  quoteText: string;
  authorName: string;
}

interface Props {
  quotes: Quote[];
  onEdit: (quote: Quote) => void;
  onDelete: (id: string) => void;
}

const QuoteList: React.FC<Props> = ({ quotes, onEdit, onDelete }) => {
  return (
    <ul>
      {quotes.map((quote) => (
        <QuoteItem
          key={quote._id}
          quote={quote}
          onEdit={() => onEdit(quote)}
          onDelete={() => onDelete(quote._id)}
        />
      ))}
    </ul>
  );
};

export default QuoteList;