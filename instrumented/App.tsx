import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import './index.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
