import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import HomeBooking from './HomeBooking';

let container = null;

const mockedHome = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "1",
};

beforeEach(() => {

  container = render(<HomeBooking home={ mockedHome } />).container;

});

it('foo', () => {

  console.log(container.innerHTML);

  expect(true).toBeTruthy();

});

// should show title
// should show price
// should show check-in date field
// should show check-out date field
// should calculate total
// should book home after clicking the Book button
// should close the dialog and show notification after booking home
