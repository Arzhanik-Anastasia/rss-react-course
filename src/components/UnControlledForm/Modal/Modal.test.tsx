import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Modal from './Modal';

describe('Modal', () => {
  it('test render modal', () => {
    const onClickModal = vi.fn();
    render(<Modal onClickModal={onClickModal} />);
    const closeElem = screen.getByTestId('close');
    expect(closeElem).toBeInTheDocument();
  });
});
