import { act, getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import apiClient from '../services/apiClient';
import Homes from './Homes';

let container;

beforeEach(async () => {

  jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
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

it('should show three homes', () => {

  expect(getAllByTestId(container, 'home').length).toBe(3);

});

it('should show home title', () => {

  expect(getAllByTestId(container, 'home-title')[0].textContent).toBe('Home 1');

});
