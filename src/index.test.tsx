import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

describe('React Router', () => {
  it('should render Home Page', (): void => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
    const header = getByTestId('header');
    const link = getByTestId('home-link');
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    expect(header).toContainElement(link);
  });

  it('should navigate to page', (): void => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('about-link'));
    expect(container.innerHTML).toMatch('about');
  });

  it('should navigate to page not found', (): void => {
    window.history.pushState({}, 'Not Found', '*');
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });

  /*   it('Should save to local storage value from input', (): void => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Main>
          <input data-testid="search-input" />
        </Main>
      </BrowserRouter>
    );
    const inputElement = getByTestId('search-input');
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    userEvent.type(inputElement, '');
    expect(inputElement).toHaveValue('');
    fireEvent.click(getByTestId('about-link'));
    expect(container.innerHTML).toMatch('about');
    fireEvent.click(getByTestId('home-link'));
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    expect(getByTestId('header')).toContainElement(getByTestId('home-link'));
    fireEvent.click(getByTestId('form-link'));
    expect(container.innerHTML).toMatch('Form');
  }); */
});
