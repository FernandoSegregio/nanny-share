import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';
import { ArticleProfile } from './style';

describe('Testing component Main', () => {
  it('should be able to show a main element in the document.', () => {
    render(<Main />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
  it('should be able to show a article element in the document.', () => {
    render(<ArticleProfile />);

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
  });
  it('should be able to show a image a profile in the render.', () => {
    render(<Main />);
    const altImgProfile = 'profile sarah';
    const imgProfile = screen.getByAltText(altImgProfile);
    expect(imgProfile).toHaveAttribute('src', 'sarah-profile-image.svg');
  });
  it('should be able to show an input field with the due data test id.', () => {
    render(<Main />);

    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('');

    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
  });
  it('should be able to show a button in form.', () => {
    render(<Main />);

    const buttonSend = screen.getByRole('button', { name: /Send/i });
    expect(buttonSend).toBeInTheDocument();
  });
});
