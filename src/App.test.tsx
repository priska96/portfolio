import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current role and selected work', () => {
  render(<App />);
  expect(screen.getAllByText(/Senior Frontend Developer/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', {name: 'Products with purpose.'})).toBeInTheDocument();
});
