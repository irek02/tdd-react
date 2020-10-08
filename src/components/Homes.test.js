import { act, getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import ApiClientService from '../services/ApiClientService';
import Homes from './Homes';

let container;

beforeEach(async () => {

  jest.spyOn(ApiClientService, 'getHomes').mockImplementation(() => {
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
    ])
  });

  container = render(<Homes />).container;

  await act(async () => {});

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
