/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import FormPage from './FormPage';

describe('render Form Page', () => {
  it('add Card', async () => {
    window.URL.createObjectURL = vi.fn();
    const user = userEvent.setup();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(screen.queryByText(/Данные успешно добавлены/i)).toBeNull();
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
    expect(screen.getByTestId('button-submit-form')).not.toBeDisabled();
    await user.click(screen.getByTestId('button-submit-form'));
    const li = screen.getAllByRole('listitem');
    expect(li.length).toEqual(1);
    expect(screen.queryByText(/Данные успешно добавлены/i)).toBeInTheDocument();
    const closeElem = screen.getByTestId('close');
    expect(closeElem).toBeInTheDocument();
    await user.click(closeElem);
    expect(screen.queryByTestId('modal')).toBeNull();
    expect(screen.getByTestId('news')).toHaveTextContent('Да');
  });

  it('add Card with news', async () => {
    window.URL.createObjectURL = vi.fn();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
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
    const inputCheckbox = screen.getByTestId('input-checkbox') as HTMLInputElement;
    await user.click(inputCheckbox);
    await user.click(screen.getByTestId('button-submit-form'));
    expect(screen.getByTestId('news')).toHaveTextContent('Нет');
  });
});
