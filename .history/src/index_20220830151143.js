import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AbTestSnippet from './pages/snippet';
import ScrollToTop from './components/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <ScrollToTop> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/snippets" exact element={<AbTestSnippet />} />
        {/* </ScrollToTop> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
