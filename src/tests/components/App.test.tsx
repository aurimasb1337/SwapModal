import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  test('renders the h3 element with the correct testid', () => {
    render(<App />);
    const homeTitle = screen.getByTestId('home-title');
    expect(homeTitle).toBeInTheDocument();
  });

});
