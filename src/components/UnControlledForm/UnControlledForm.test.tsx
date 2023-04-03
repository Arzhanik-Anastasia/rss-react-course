import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import UncontrolledForm from './UnControlledForm';

describe('Form', () => {
  it('test firstName Input', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    const inputFirstName = screen.getByTestId('input-firstName');
    expect(inputFirstName).toBeInTheDocument();
    expect(screen.queryByText(/Слишком короткое имя/i)).toBeNull();
    await user.type(inputFirstName, 't');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Слишком короткое имя/i)).toBeInTheDocument();
    await user.type(inputFirstName, 'Ivan');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Слишком короткое имя/i)).toBeNull();
  });

  it('test lastName Input', async () => {
    const onAddCard = vi.fn();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    const user = userEvent.setup();
    const inputLastName = screen.getByTestId('input-lastName');
    expect(inputLastName).toBeInTheDocument();
    expect(screen.queryByText(/Слишком короткая фамилия/i)).toBeNull();
    await user.type(inputLastName, 't');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Слишком короткая фамилия/i)).toBeInTheDocument();
    await user.type(inputLastName, 'Ivanov');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Слишком короткая фамилия/i)).toBeNull();
  });

  it('test zipCode Input', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    const inputZipCode = screen.getByTestId('input-zipcode');
    expect(inputZipCode).toBeInTheDocument();
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeNull();
    await user.type(inputZipCode, '123');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeInTheDocument();
    await user.type(inputZipCode, '123456');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Минимальное количество символов - 6/i)).toBeNull();
  });

  it('test birthDay Input', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    const inputBirthDay = screen.getByTestId('input-birthDay');
    expect(inputBirthDay).toBeInTheDocument();
    await user.type(inputBirthDay, '2000-04-22');
    await user.click(btnSubmit);
    expect(screen.queryByText(/Только старше 18 лет/i)).toBeNull();
  });

  it('test country Select', () => {
    const onAddCard = vi.fn();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeInTheDocument();
  });

  it('renders all options', () => {
    const onAddCard = vi.fn();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const selectedOption = screen.getAllByRole('option');
    expect(selectedOption.length).toEqual(3);
  });

  it('test avatar Input', async () => {
    const onAddCard = vi.fn();
    window.URL.createObjectURL = vi.fn();
    const user = userEvent.setup();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    const inputFile = screen.getByTestId('input-avatar');
    expect(inputFile).toBeInTheDocument();
    await user.click(btnSubmit);
    expect(screen.queryByText(/Необходимо фото/i)).toBeInTheDocument();
    await user.upload(inputFile, file);
    await user.click(btnSubmit);
    expect(screen.queryByText(/Необходимо фото/i)).toBeNull();
  });

  it('test input checkBox switcher', async () => {
    const onAddCard = vi.fn();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const user = userEvent.setup();
    const inputSwitcher = screen.getByTestId('input-switcher') as HTMLInputElement;
    expect(inputSwitcher).toBeInTheDocument();
    await user.click(inputSwitcher);
    expect(inputSwitcher.checked).toEqual(true);
    await user.click(inputSwitcher);
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    await user.click(btnSubmit);
    expect(inputSwitcher.checked).toEqual(false);
  });

  it('test input checkBox agree', async () => {
    const onAddCard = vi.fn();
    const user = userEvent.setup();
    render(<UncontrolledForm onAddCard={onAddCard} />);
    const inputCheckbox = screen.getByTestId('input-checkbox') as HTMLInputElement;
    const btnSubmit = screen.getByTestId('button-submit-form') as HTMLButtonElement;
    expect(inputCheckbox).toBeInTheDocument();
    expect(screen.queryByText(/Необходимо Ваше согласие/i)).toBeNull();
    await user.click(inputCheckbox);
    expect(inputCheckbox.checked).toEqual(true);
    await user.click(inputCheckbox);
    await user.click(btnSubmit);
    expect(inputCheckbox.checked).toEqual(false);
    expect(screen.queryByText(/Необходимо Ваше согласие/i)).toBeInTheDocument();
  });
});
