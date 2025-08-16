import { render, screen } from '@testing-library/react';
import { Button } from '.';
import Link from 'next/link';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
  });
  it('should render with a custom component', () => {
    render(
      <Button asChild>
        <Link href="/">Click me</Link>
      </Button>
    );
    expect(screen.getByRole('link', { name: 'Click me' })).toBeInTheDocument();
  });
});
