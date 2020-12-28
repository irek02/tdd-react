import { fireEvent, getByTestId, render } from '@testing-library/react';
import React from 'react';
import HomeBooking from './HomeBooking';

let container = null;

const mockedHome = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "125",
};

beforeEach(() => {

  container = render(<HomeBooking home={ mockedHome } />).container;

});

it('should show title', () => {

  expect(getByTestId(container, 'title').textContent).toBe('Test home 1');

});

it('should show price', () => {

  expect(getByTestId(container, 'price').textContent).toBe('125');

});

it('should show check-in date field', () => {

  expect(getByTestId(container, 'check-in')).toBeTruthy();

});

it('should show check-out date field', () => {

  expect(getByTestId(container, 'check-out')).toBeTruthy();

});

it('should calculate total', () => {

  // enter check-in date: 2020-12-04
  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2020-12-04' } },
  );

  // enter check-out date: 2020-12-07
  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2020-12-07' } },
  );

  // assert the total: 3*125=375
  expect(getByTestId(container, 'total').textContent).toBe('375');

});

//
//
//
//
//
// should book home after clicking the Book button
// should close the dialog and show notification after booking home

it('should show empty when no home provided', () => {

  container = render(<HomeBooking home={ null } />).container;

  expect(getByTestId(container, 'empty')).toBeTruthy();

});
