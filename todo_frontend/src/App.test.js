import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders header', () => {
    render(<App />);
    expect(screen.getByText(/retro todo/i)).toBeInTheDocument();
});

test('deletes a todo when clicking delete', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Initial seed todo from App state
    expect(screen.getByText('Add your first task')).toBeInTheDocument();

    // Click the first delete button
    const deleteButtons = screen.getAllByRole('button', { name: /delete todo/i });
    await user.click(deleteButtons[0]);

    // Todo should be removed
    expect(screen.queryByText('Add your first task')).not.toBeInTheDocument();
});
