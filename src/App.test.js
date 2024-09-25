import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  
  beforeEach(() => {
    // Render the App component before each test
    render(<App />);
  });

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders header text', () => {
    const headerElement = screen.getByText(/Edit src\/App.js and save to reload/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders learn react link to the correct URL', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  });

  test('renders logo image', () => {
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('checks for the existence of the main div', () => {
    const mainDiv = screen.getByRole('main'); // Assuming there's a role "main"
    expect(mainDiv).toBeInTheDocument();
  });
});
