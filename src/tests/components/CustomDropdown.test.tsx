import { render, screen } from '@testing-library/react';
import CustomDropdown from '../../components/dropdown/CustomDropdown';



test('renders the dropdown', () => {
    render(<CustomDropdown  />);
  
    const selectDropdown = screen.getByTestId('select-dropdown');

  
    expect(selectDropdown).toBeInTheDocument();
  });