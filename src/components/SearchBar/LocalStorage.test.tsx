import { vi } from 'vitest';

export const fakeLocalStorage = {
  clear: vi.fn(),
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

Object.defineProperty(window, 'location', {
  writable: true,
  value: fakeLocalStorage,
});

describe('LocalStorage', () => {
  it('return null on error', () => {
    expect(localStorage.getItem('search')).toBeNull();
  });
  it('return setItem', () => {
    expect(localStorage.setItem('search', 'test'));
    expect(localStorage.getItem('search')).toBe('test');
  });
  it('return undefined on error', () => {
    expect(localStorage.removeItem('search')).toBeUndefined();
  });
});
