import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('render', async () => {
    const { container } = render(
      <div className="content-main">{true ? <ErrorMessage /> : null}</div>
    );
    expect(container).toHaveTextContent(/Возникла ошибка/i);
  });
});
