import React from "react";
import { render, fireEvent, getByTestId, act } from '@testing-library/react'
import HomeBooking from "./HomeBooking";
import notificationService from "../services/notificationService";
import bookingDialogService from "../services/bookingDialogService";

let container = null;

const home = {
  "title": "Home 1",
  "image": "listing.jpg",
  "location": "new york",
  "price": "125"
};

beforeEach(async () => {

  container = render(
    <div>
      <HomeBooking home={home}></HomeBooking>
    </div>,
  ).container;

});

it('should show title', () => {

  expect(getByTestId(container, 'title').textContent).toEqual('Book Home 1');

});

it('should show price', () => {

  expect(getByTestId(container, 'price').textContent).toContain('$125 per night');

});

it('should show check in date field', () => {

  expect(getByTestId(container, 'check-in')).toBeTruthy();

});

it('should show check out date field', () => {

  expect(getByTestId(container, 'check-out')).toBeTruthy();

});

it('should show total', async () => {

  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2019-12-20' } }
  );

  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2019-12-23' } }
  );

  // assert that the total shows 3x125=375
  expect(container.querySelector('[data-testid="total"]').textContent).toContain('Total: $375');

});

it('should show "-- for total when dates are invalid', () => {

  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '' } }
  );

  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '' } }
  );

  expect(getByTestId(container, 'total').textContent)
    .toContain('Total: --');

});

it('should book home after clicking the Book button', () => {

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve('Home booked!')
    })
  );

  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2019-12-20' } }
  );

  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2019-12-23' } }
  );

  // click in the Book
  getByTestId(container, 'book-btn').click();

  // assert that the data service was used to book the home
  expect(global.fetch).toHaveBeenCalled();

});

it('should close the dialog and show notification after clicking Book button', async () => {

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve('Home booked!')
    })
  );
  jest.spyOn(bookingDialogService, 'close');
  jest.spyOn(notificationService, 'open');

  // user enters check in date: 12/20/19
  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2019-12-20' } }
  );

  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2019-12-23' } }
  );

  // click in the Book
  getByTestId(container, 'book-btn').click();

  await act(async () => {});

  expect(bookingDialogService.close).toHaveBeenCalled();
  expect(notificationService.open).toHaveBeenCalled();

});
