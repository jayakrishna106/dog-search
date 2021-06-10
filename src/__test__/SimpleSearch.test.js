import { render, screen } from '@testing-library/react';
import SimpleSearch from '../components/SimpleSearch';

test('renders SimpleSearch By Placeholder Text', () => {
  render(<SimpleSearch
    placeholder={'Search Test here'}
    />);
  const linkElement = screen.getByPlaceholderText(/Search Test here/i);
  expect(linkElement).toBeInTheDocument();
});

