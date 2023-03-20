import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About/About';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

describe('React Router', () => {
  it('should render Home Page', (): void => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout content={{ cont: <Main />, title: 'home' }} />} />
          <Route path="/about" element={<Layout content={{ cont: <About />, title: 'about' }} />} />
          <Route path="*" element={<Layout content={{ cont: <NotFound />, title: '404' }} />} />
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
          <Route path="/" element={<Layout content={{ cont: <Main />, title: 'home' }} />} />
          <Route path="/about" element={<Layout content={{ cont: <About />, title: 'about' }} />} />
          <Route path="*" element={<Layout content={{ cont: <NotFound />, title: '404' }} />} />
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
          <Route path="/" element={<Layout content={{ cont: <Main />, title: 'home' }} />} />
          <Route path="/about" element={<Layout content={{ cont: <About />, title: 'about' }} />} />
          <Route path="*" element={<Layout content={{ cont: <NotFound />, title: '404' }} />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });

  it('Should save to local storage value from input', (): void => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Layout
          content={{
            cont: (
              <Main>
                <input data-testid="search-input" />
              </Main>
            ),
            title: 'home',
          }}
        />
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
  });
});
