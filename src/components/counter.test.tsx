import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Counter } from './counter';

describe('<Counter />', () => {
  it('renders the initial value', () => {
    render(<Counter initial={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('increments and decrements', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByText('2')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
