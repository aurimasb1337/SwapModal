import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/button/Button';


describe('Button Component', () => {
  test('renders button with text content', () => {
    const { getByText } = render(<Button>Hello</Button>);
    const button = getByText('Hello');

    expect(button).toBeInTheDocument();
  });

  test('fires onClick event when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = getByText('Click Me');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    const { getByTestId } = render(<Button data-testid='btn-test' disabled>Disabled Button</Button>);
    const button = getByTestId('btn-test');

    expect(button).toBeDisabled();
  });

  test('displays loading spinner when fetching prop is true', () => {
    const { getByTestId } = render(<Button fetching>Loading</Button>);
    const spinner = getByTestId('loading-spinner');

    expect(spinner).toBeInTheDocument();
  });
});
