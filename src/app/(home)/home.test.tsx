import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
