import React from 'react';
import './QuoteItem.css';

interface Quote {
  _id: string;
  quoteText: string;
  authorName: string;
}

interface Props {
  quote: Quote;
  onEdit: () => void;
  onDelete: () => void;
}

const QuoteItem: React.FC<Props> = ({ quote, onEdit, onDelete }) => {
    return (
    <li>
      <span>
        <i>“{quote.quoteText}“ - <b>{quote.authorName}</b></i>
      </span>
      <div className="menu">
        <button onClick={onEdit} className="green-button">Edit</button>
        <button onClick={onDelete} className="red-button">Delete</button>
      </div>
    </li>
  );
};

export default QuoteItem;