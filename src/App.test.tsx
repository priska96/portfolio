import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders the current role and selected work', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(screen.getAllByText(/Senior Frontend Developer/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', {name: 'Products with purpose.'})).toBeInTheDocument();
});

test('renders a case study on its dedicated route', () => {
  render(<MemoryRouter initialEntries={['/work/expo-nfc-module']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', {name: 'Expo NFC Module'})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /Back to selected work/i})).toHaveAttribute('href', '/#work');
});
