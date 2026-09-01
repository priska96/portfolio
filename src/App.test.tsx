import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation and project section', () => {
  render(<App />);
  expect(screen.getByRole('link', {name: 'About Me'})).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: 'My Projects'})).toBeInTheDocument();
});
