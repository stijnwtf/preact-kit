import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { theme } from '@/lib/theme';
import { ThemeToggle } from './theme-toggle';

describe('<ThemeToggle />', () => {
  it('toggles the dark class on <html>', async () => {
    const user = userEvent.setup();
    theme.value = 'light';
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }));
    expect(theme.value).toBe('dark');
    expect(document.documentElement).toHaveClass('dark');

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }));
    expect(document.documentElement).not.toHaveClass('dark');
  });
});
