import React from "react";
import { act, getAllByTestId, getByTestId, render } from "@testing-library/react";
import bookingDialogService from "../services/bookingDialogService";

import Homes from "./Homes";

let container = null;

const fakeHomes = [
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
];

jest.spyOn(global, "fetch").mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeHomes)
  })
);

beforeEach(async () => {

  container = render(
    <div>
      <Homes></Homes>
    </div>,
  ).container;

  await act(async () => {});

});

it('should show homes', async () => {

  expect(getAllByTestId(container, 'home').length).toBeTruthy();

});

it('should show home info', () => {

  const home = getAllByTestId(container, 'home')[0];

  expect(getByTestId(home, 'image')).toBeTruthy();
  expect(getByTestId(home, 'title')).toBeTruthy();
  expect(getByTestId(home, 'location')).toBeTruthy();

});

it('should show Book button', () => {

  const home = getAllByTestId(container, 'home')[0];

  expect(getByTestId(home, 'book-btn')).toBeTruthy();

});

it('should use dialog service to open a dialog when clicking on Book button', () => {

  jest.spyOn(bookingDialogService, 'open');

  const homeBookBtn = getAllByTestId(container, 'book-btn')[0];

  homeBookBtn.click();

  expect(bookingDialogService.open).toHaveBeenCalledWith({
    "title": "Home 1",
    "image": "listing.jpg",
    "location": "new york",
    "price": "125"
  });

});
