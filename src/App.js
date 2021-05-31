import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import QuoteBox from './components/quoteBox.component';

import './App.css';

function App() {
  const randomColor = useSelector(state => state.color.currColor);

  return (
    <div className="App" style={{ background: `${randomColor}` }}>
      <div className="header"></div>
      <QuoteBox style={{ color: `{randomColor}` }} theme={randomColor} />
    </div>
  );
}

export default App;
