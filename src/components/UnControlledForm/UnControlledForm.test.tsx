import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from './../../components/CardForm/CardForm';
import { vi } from 'vitest';
import UncontrolledForm from './UnControlledForm';
import { checkedDate, validateZipCode } from './../../utils/helpers';

describe('Form', () => {
  it('test zipCode Input', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const button = screen.getByTestId('button-submit-form');
    const inputZipCode = screen.getByTestId('input-zipcode');
    expect(inputZipCode).toBeInTheDocument();
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeNull();
    await user.click(button);
    await user.type(inputZipCode, '123');
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeInTheDocument();
    await user.type(inputZipCode, '123456');
    await user.click(button);
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeNull();
    expect(validateZipCode('123456')).toBe(true);
  });

  it('test birthDay Input', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const inputBirthDay = screen.getByTestId('input-birthDay');
    expect(inputBirthDay).toBeInTheDocument();
    expect(screen.queryByText(/Только пользователи старше 18 лет/i)).toBeNull();
    const button = screen.getByTestId('button-submit-form');
    await user.type(inputBirthDay, '2022-04-22');
    await user.click(button);
    expect(screen.queryByText(/Только пользователи старше 18 лет/i)).toBeInTheDocument();
    expect(checkedDate('02-08-2000')).toBe(true);
  });

  it('renderCard with news true', async () => {
    window.URL.createObjectURL = vi.fn((file) => (file instanceof File && file.name) || '');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const card = {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      zipCode: '123456',
      birthDay: '12-12-2000',
      country: 'Belarus',
      news: true,
      avatar: file,
    };
    const { getAllByRole, queryByText } = render(<CardForm {...card} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(1);
    expect(queryByText(/Получать уведомления: Да/i)).toBeInTheDocument();
  });

  it('renderCard with news false', async () => {
    window.URL.createObjectURL = vi.fn((file) => (file instanceof File && file.name) || '');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const card = {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      zipCode: '123456',
      birthDay: '12-12-2000',
      country: 'Belarus',
      news: false,
      avatar: file,
    };
    const { getAllByRole, queryByText } = render(<CardForm {...card} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(1);
    expect(queryByText(/Получать уведомления: Нет/i)).toBeInTheDocument();
  });
});
