import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setCurrentColor } from '../store/colorSlice';
import { Card } from 'react-bootstrap';
import './quoteBox.styles.css';

import { COLORS } from '../colors';

export const quotes = [];

const QuoteBox = ({ theme }) => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const results = await axios.get('https://type.fit/api/quotes');

        quotes.push(results.data);
        setCurrentQuote(quotes[0][Date.now() % quotes.length].text);
        setCurrentAuthor(quotes[0][Date.now() % quotes.length].author);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuotes();
  }, []);

  const newQuote = () => {
    setCurrentQuote(quotes[0][Date.now() % quotes[0].length].text);
    setCurrentAuthor(quotes[0][Date.now() % quotes[0].length].author);
    console.log(currentQuote, currentAuthor);
    dispatch(setCurrentColor(COLORS[Date.now() % COLORS.length]));
  };
  return (
    <Card
      id="quote-box"
      style={{
        maxWidth: '50rem',
        maxHeight: '70 rem',
      }}
    >
      <Card.Body className="body">
        <i
          className="fas fa-quote-left"
          style={{ color: `${theme}`, marginTop: '10px' }}
        ></i>
        <Card.Text
          id="text"
          className="text"
          style={{ color: `${theme}`, marginLeft: '30px' }}
        >
          {currentQuote}
        </Card.Text>
        <div id="author" className="Author" style={{ color: `${theme}` }}>
          -{currentAuthor}
        </div>
        <div className="btns">
          <div className="social-media">
            <a href="https://www.twitter.com/intent/tweet">
              <button
                className="social-btn"
                style={{
                  background: `${theme}`,
                  color: 'white',
                  width: 40,
                  height: 40,
                }}
              >
                <i class="fab fa-twitter"></i>
              </button>
            </a>
            <a href="https://www.tumblr.com/share">
              <button
                className="social-btn"
                style={{
                  background: `${theme}`,
                  color: 'white',
                  width: 40,
                  height: 40,
                }}
              >
                <i class="fab fa-tumblr"></i>
              </button>
            </a>
          </div>
          <div className="new-quote" id="new-quote">
            <button
              className="social-btn"
              onClick={newQuote}
              style={{ background: `${theme}`, color: 'white' }}
            >
              New Quote
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuoteBox;
