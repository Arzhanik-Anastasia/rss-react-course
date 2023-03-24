import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UncontrolledForm from './../../components/UnControlledForm/UnControlledForm';

import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import FormPage from './FormPage';

describe('render Form Page', () => {
  it('add Card', async () => {
    window.URL.createObjectURL = vi.fn();
    const user = userEvent.setup();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const { container } = render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.queryByText(/Данные успешно добавлены/i)).toBeNull();
    const button = screen.getByTestId('button-submit-form');
    const inputFirstName = screen.getByTestId('input-firstName');
    await user.type(inputFirstName, 'Ivan');
    const inputLastName = screen.getByTestId('input-lastName');
    await user.type(inputLastName, 'Ivanov');
    const inputZipCode = screen.getByTestId('input-zipcode');
    await user.type(inputZipCode, '123456');
    const inputBirthDay = screen.getByTestId('input-birthDay');
    await user.type(inputBirthDay, '2000-04-22');
    const inputFile = screen.getByTestId('input-avatar') as HTMLInputElement;
    await user.upload(inputFile, file);
    expect(inputFile.files)!.toHaveLength(1);
    expect(inputFile.files![0]).toStrictEqual(file);
    expect(inputFile.files!.item(0)).toStrictEqual(file);
    expect(inputFile.files).toHaveLength(1);
    const inputSwitcher = screen.getByTestId('input-switcher') as HTMLInputElement;
    await user.click(inputSwitcher);
    const inputCheckbox = screen.getByTestId('input-checkbox') as HTMLInputElement;
    await user.click(inputCheckbox);
    await user.click(button);
    expect(container);
  });

  it('render Card from form', async () => {
    const onAddCard = vi.fn();
    window.URL.createObjectURL = vi.fn((file) => (file instanceof File && file.name) || '');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const user = userEvent.setup();
    const { getByTestId } = render(<UncontrolledForm onAddCard={onAddCard} />);
    const inputFirstName = getByTestId('input-firstName');
    await user.type(inputFirstName, 'Ivan');
    const inputLastName = getByTestId('input-lastName');
    await user.type(inputLastName, 'Ivanov');
    const inputZipCode = getByTestId('input-zipcode');
    await user.type(inputZipCode, '123456');
    const inputBirthDay = getByTestId('input-birthDay');
    await user.type(inputBirthDay, '2000-04-22');
    const inputFile = getByTestId('input-avatar') as HTMLInputElement;
    await user.upload(inputFile, file);
    const inputCheckbox = getByTestId('input-checkbox') as HTMLInputElement;
    await user.click(inputCheckbox);
    await user.click(getByTestId('button-submit-form'));
    expect(inputFile.files).toHaveLength(1);
  });
});
