import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Testing component Footer', () => {
  it('should be able to show a h3 text "Become a nanny share host" element.', () => {
    render(<Footer />);

    const h3Element = screen.getByRole('heading', {
      name: /Become a nanny share host/i,
      level: 3,
    });
    expect(h3Element).toBeInTheDocument();
  });
  it('should be able to show a button text "Become a Nanny Share Host" element.', () => {
    render(<Footer />);

    const buttonHostText = screen.getByRole('button', {
      name: /Create Your Nanny Share/i,
    });
    expect(buttonHostText).toBeInTheDocument();
  });
  it('should be able to show a image a logo hapu in the render.', () => {
    render(<Footer />);

    const altImgLogoHapu = 'logo hapu';
    const imgLogoHapu = screen.getByAltText(altImgLogoHapu);
    expect(imgLogoHapu).toHaveAttribute('src', 'logo-hapu.svg');
  });
});
