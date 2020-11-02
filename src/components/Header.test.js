import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

let container = null;

beforeEach(() => {

  container = render(<Header/>).container;

});

it('should show logo', () => {

  expect(getByTestId(container, 'logo')).toBeTruthy();

});

it('should show search', () => {

  expect(getByTestId(container, 'search')).toBeTruthy();

});

it('should show menu', () => {

  expect(getByTestId(container, 'menu')).toBeTruthy();

});

it('should show filters', () => {

  expect(getByTestId(container, 'home-type')).toBeTruthy();
  expect(getByTestId(container, 'dates')).toBeTruthy();
  expect(getByTestId(container, 'guests')).toBeTruthy();
  expect(getByTestId(container, 'price')).toBeTruthy();
  expect(getByTestId(container, 'rooms')).toBeTruthy();
  expect(getByTestId(container, 'amenities')).toBeTruthy();

});
