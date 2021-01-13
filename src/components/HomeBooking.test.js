import { act, fireEvent, getByTestId, render } from '@testing-library/react';
import React from 'react';
import apiClient from '../services/apiClient';
import bookingDialogService from '../services/bookingDialogService';
import notificationService from '../services/notificationService';
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

  expect(getByTestId(container, 'price').textContent).toBe('$125 per night');

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
  expect(getByTestId(container, 'total').textContent).toBe('Total: $375');

});

it('should show "--" for invalid dates', () => {

  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2020-12-04' } },
  );

  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2020-12-02' } },
  );

  expect(getByTestId(container, 'total').textContent).toBe('Total: $--');

});

it('should book home after clicking the Book button', () => {

  // spy on apiClient
  jest.spyOn(apiClient, 'bookHome').mockImplementation(() => {
    return Promise.resolve({ message: 'Mocked home booked!' });
  });

  // select dates
  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2020-12-04' } },
  );
  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2020-12-07' } },
  );

  // click the Book button
  getByTestId(container, 'book-btn').click();

  // assert that apiClient booked the home
  expect(apiClient.bookHome).toHaveBeenCalledWith(mockedHome, '2020-12-04', '2020-12-07');

});

it('should close the dialog and show notification after booking home', async () => {

  jest.spyOn(apiClient, 'bookHome').mockImplementation(() => Promise.resolve({ message: 'Mocked home booked!' }));
  jest.spyOn(bookingDialogService, 'close').mockImplementation(() => {});
  jest.spyOn(notificationService, 'open').mockImplementation(() => {});

  fireEvent.change(
    getByTestId(container, 'check-in'),
    { target: { value: '2020-12-04' } },
  );
  fireEvent.change(
    getByTestId(container, 'check-out'),
    { target: { value: '2020-12-07' } },
  );
  getByTestId(container, 'book-btn').click();
  await act(async () => {});

  expect(bookingDialogService.close).toHaveBeenCalled();
  expect(notificationService.open).toHaveBeenCalledWith('Mocked home booked!');

});

it('should show empty when no home provided', () => {

  container = render(<HomeBooking home={ null } />).container;

  expect(getByTestId(container, 'empty')).toBeTruthy();

});
