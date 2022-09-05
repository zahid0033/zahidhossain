import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AbTestSnippet from './pages/snippet';
import ScrollToTop from './components/scrollToTop';
import LeetCode from './pages/leetCode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/snippets" exact element={<AbTestSnippet />} />
          <Route path="/leetcode" exact element={<LeetCode />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
