import { act, getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import apiClientService from '../services/apiClientService';
import Homes from './Homes';

let container;

beforeEach(async () => {

  jest.spyOn(apiClientService, 'getHomes').mockImplementation(() => {
    return Promise.resolve([
      {
        "title": "Home 1",
        "image": "listing.jpg",
        "location": "new york",
        "price": "125"
      },
      {
        "title": "Home 2",
        "image": "listing.jpg",
        "location": "boston",
        "price": "225"
      },
      {
        "title": "Home 3",
        "image": "listing.jpg",
        "location": "chicago",
        "price": "325"
      }
    ]);
  });

  container = render(<Homes />).container;

  await act(async () => {});

});

it('should show homes', () => {

  expect(getAllByTestId(container, 'home').length).toBe(3);

});

it('should show home title', () => {

  expect(getAllByTestId(container, 'home-title')[0].textContent).toBe('Home 1');

});

it('should show home location', () => {

  expect(getAllByTestId(container, 'home-location')[0].textContent).toBe('new york');

});

it('should show home price', () => {

  expect(getAllByTestId(container, 'home-price')[0].textContent).toBe('$125 per night');

});

it('should show home image', () => {

  const homeImage = getAllByTestId(container, 'home-image')[0];

  expect(homeImage.getAttribute('src')).toBe('listing.jpg');

});
