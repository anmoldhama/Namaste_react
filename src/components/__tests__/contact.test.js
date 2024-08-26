import Contact from '../Contact';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

test('Should render the Contact Us page', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { name: 'Contact Us' });
    expect(heading).toBeInTheDocument();
});
