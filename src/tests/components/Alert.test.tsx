import { render } from '@testing-library/react';
import Alert from '../../components/alerts/Alert';


describe('Alert Component', () => {
  test('renders success alert with message', () => {
    const { getByTestId } = render(<Alert variant="success" message="Operation successful" />);
    const alertSuccess = getByTestId('alert-success');

    expect(alertSuccess).toBeInTheDocument();
    expect(alertSuccess).toHaveTextContent('Success! Operation successful');
  });

  test('renders error alert with message', () => {
    const { getByTestId } = render(<Alert variant="error" message="Something went wrong" />);
    const alertError = getByTestId('alert-error');

    expect(alertError).toBeInTheDocument();
    expect(alertError).toHaveTextContent('Error occurred. Something went wrong');
  });
});
