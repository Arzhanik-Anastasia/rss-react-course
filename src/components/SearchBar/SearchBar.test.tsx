import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('render SearchBar', () => {
    const onUpdateSearchBar = vi.fn();
    const term = '';
    render(<SearchBar onUpdateSearchBar={onUpdateSearchBar} term={term} />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('input focus', () => {
    const onUpdateSearchBar = vi.fn();
    const term = 'Hello';
    render(<SearchBar onUpdateSearchBar={onUpdateSearchBar} term={term} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toHaveFocus();
    inputElement.focus();
    expect(inputElement).toHaveFocus();
  });

  it('change input value', async () => {
    const onUpdateSearchBar = vi.fn();
    const term = 'Hello';
    render(<SearchBar onUpdateSearchBar={onUpdateSearchBar} term={term} />);
    const inputElement = screen.getByTestId('search-input');
    await userEvent.type(inputElement, 'Hello');
    expect(onUpdateSearchBar).toHaveBeenCalledTimes(5);
  });
});
