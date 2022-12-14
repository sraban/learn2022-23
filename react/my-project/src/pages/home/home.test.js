import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Home from './Home';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Home />, div, () => {
    console.log("renderer successful");
  });
  createRoot(div).unmount();
});