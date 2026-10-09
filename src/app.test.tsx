import { render, screen } from '@testing-library/preact';
import { describe, expect, it } from 'vitest';
import { App } from './app';

describe('<App />', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ship Preact apps fast.');
  });
});
