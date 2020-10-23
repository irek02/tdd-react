import { act, getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import apiClient from '../services/apiClient';
import Homes from './Homes';

let container;

beforeEach(async () => {

  jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
    return Promise.resolve([
      {
        "title": "Mock title 1",
        "image": "listing.jpg",
        "location": "New York, NY",
        "price": "289"
      },
      {
        "title": "Mock title 2",
        "image": "listing.jpg",
        "location": "San Francisco, CA",
        "price": "340"
      },
      {
        "title": "Mock title 3",
        "image": "listing.jpg",
        "location": "New York, NY",
        "price": "291"
      },
    ]);
  });

  container = render(<Homes />).container;

  await act(async () => {});

});

it('should show homes', () => {

  const homes = getAllByTestId(container, 'home');

  expect(homes.length).toBeGreaterThan(0);


});

it('should show home title', () => {

  const homeTitles = getAllByTestId(container, 'home-title');

  expect(homeTitles[0].textContent).toBe('Mock title 1');


});

it('should show home image', () => {

  const homeImages = getAllByTestId(container, 'home-image');

  expect(homeImages[0].getAttribute('src')).toBe('listing.jpg');

});

it('should show home location', () => {

  const homeLocations = getAllByTestId(container, 'home-location');

  expect(homeLocations[0].textContent).toBe('New York, NY');

});

it('should show home price', () => {

  const homePrices = getAllByTestId(container, 'home-price');

  expect(homePrices[0].textContent).toBe('289');

});

it('should show booking button', () => {

  const homeBookingBtn = getAllByTestId(container, 'home-booking-btn');

  expect(homeBookingBtn[0]).toBeTruthy();

});
