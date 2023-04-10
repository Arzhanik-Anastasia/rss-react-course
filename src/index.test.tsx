import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('React Router', () => {
  it('should render Home Page', (): void => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    const header = getByTestId('header');
    const link = getByTestId('home-link');
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    expect(header).toContainElement(link);
  });

  it('should navigate to page', async (): Promise<void> => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(getByTestId('about-link'));
    expect(container.innerHTML).toMatch('about');
    await user.click(getByTestId('form-link'));
    expect(container.innerHTML).toMatch('form');
  });

  it('should navigate to page not found', (): void => {
    window.history.pushState({}, 'Not Found', '*');
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });
});
