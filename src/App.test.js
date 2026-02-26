// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BootstrapStratos title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BootstrapStratos/i);
    expect(titleElement).toBeInTheDocument();
});
