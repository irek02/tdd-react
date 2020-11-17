import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import HomeBooking from './HomeBooking';

let container = null;

const homeMock = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "125",
}

beforeEach(() => {

  container = render(<HomeBooking home={ homeMock }></HomeBooking>).container;

});

it('foo', () => {

  expect(true).toBe(true);

});

it('should show home title', () => {

  expect(getByTestId(container, 'home-title').textContent).toBe('Test home 1');

});

it('should show price', () => {

  expect(getByTestId(container, 'home-price').textContent).toBe('125');

});

it('should show check-in input', () => {

  expect(getByTestId(container, 'check-in-input')).toBeTruthy();

});

it('should show check-out input', () => {

  expect(getByTestId(container, 'check-out-input')).toBeTruthy();

});

// should show total
// should book home after clicking the Book button
// should close the dialog and show notification after successful booking
