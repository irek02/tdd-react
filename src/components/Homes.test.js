import { getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import Homes from './Homes';

let container;

beforeEach(() => {

  container = render(<Homes />).container;

});

it('should show homes', () => {

  expect(getAllByTestId(container, 'home').length).toBe(3);

});

it('should show home title for home 1', () => {

  const home1 = getAllByTestId(container, 'home')[0];

  expect(getByTestId(home1, 'title').textContent).toBe('Home 1');

});

it('should show home title for home 2', () => {

  const home2 = getAllByTestId(container, 'home')[1];

  expect(getByTestId(home2, 'title').textContent).toBe('Home 2');

});

it('should show image for home 1', () => {

  const home1 = getAllByTestId(container, 'home')[0];

  expect(getByTestId(home1, 'image').getAttribute('src')).toBe('listing.jpg');

});

it('should show location for home 1', () => {

  const home1 = getAllByTestId(container, 'home')[0];

  expect(getByTestId(home1, 'location').textContent).toBe('new york');

});
