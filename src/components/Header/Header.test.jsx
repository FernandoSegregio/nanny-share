import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Testing component Header', () => {
  it('should be able to show a h2 text "Easily create or join a local nanny share with Hapu" element.', () => {
    render(<Header />);

    const h2Element = screen.getByRole('heading', {
      name: /easily create or join a local nanny share with hapu/i,
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });
});
