import React, { useState } from 'react';
import './index.css';

const Feedback = () => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="feedback-form-container">
      <h2>Leave your feedback</h2>
      <form className="feedback-form">
        <label htmlFor="rating">Rating</label>
        <div className="feedback-form-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => setRating(value)}
                  required
                />
                {value}<span className="feedback-form-star">&#9733;</span>
              </label>
            ))}
          </div>
        <label htmlFor="review">Review</label>
        <textarea id="review" name="review" value={review} onChange={(e) => setReview(e.target.value)} required/>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;