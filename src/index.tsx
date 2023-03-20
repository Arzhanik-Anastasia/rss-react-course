import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

import './index.css';
import Layout from './components/Layout/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout content={{ cont: <Main />, title: 'home' }} />} />
        <Route path="/about" element={<Layout content={{ cont: <About />, title: 'about' }} />} />
        <Route path="*" element={<Layout content={{ cont: <NotFound />, title: '404' }} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
