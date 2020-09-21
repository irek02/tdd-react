import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
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

beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {

  unmountComponentAtNode(container);
  container.remove();
  container = null;

});

beforeEach(async () => {

  await act(async () => {
    render(<Homes></Homes>, container);
  });

});

it('should show homes', async () => {

  expect(container.querySelectorAll('[data-testid="home"]').length).toBe(3);

});

it('should show home info', () => {

  const home = container.querySelector('[data-testid="home"]');

  expect(home.querySelector('[data-testid="image"]')).toBeTruthy();
  expect(home.querySelector('[data-testid="title"]').textContent).toEqual('Home 1');
  expect(home.querySelector('[data-testid="location"]').textContent).toEqual('new york');

});

it('should show Book button', () => {

  const home = container.querySelector('[data-testid="home"]');

  expect(home.querySelector('[data-testid="book-btn"]')).toBeTruthy();

});

it('should use dialog service to open a dialog when clicking on Book button', () => {

  jest.spyOn(bookingDialogService, 'open');

  const bookBtn = container.querySelector('[data-testid="home"] button');

  bookBtn.click();

  expect(bookingDialogService.open).toHaveBeenCalledWith({
    "title": "Home 1",
    "image": "listing.jpg",
    "location": "new york",
    "price": "125"
  });

});
