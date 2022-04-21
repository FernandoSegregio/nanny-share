import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';

describe('Testing component Main', () => {
  it('should be able to show a main element in the document.', () => {
    render(<Main />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
  it('should be able to show a article element in the document.', () => {
    render(<Main />);

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
  });
});
