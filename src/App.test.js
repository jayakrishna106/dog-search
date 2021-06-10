import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dog Breeds link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dog Breeds/i);
  expect(linkElement).toBeInTheDocument();
});
