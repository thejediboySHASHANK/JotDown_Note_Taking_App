import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Header';
import Footer from './Footer';
import Note from "./Note"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Heading />
      <Note />
      <Footer />
    </div>
  </React.StrictMode>
);

