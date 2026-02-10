// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FormatCode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FormatCode/i);
    expect(titleElement).toBeInTheDocument();
});
