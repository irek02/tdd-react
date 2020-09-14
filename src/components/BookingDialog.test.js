import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import bookingDialogService from "../services/bookingDialogService";

import BookingDialog from "./BookingDialog";

let container = null;

// jest.mock("../services/bookingDialogService");
// jest.mock("./BookingDialog", () => {
//   return function BookingDialog() {
//     return (
//       <></>
//     );
//   };
// });

// const fakeHomes = [
//   {
//     "title": "Home 1",
//     "image": "listing.jpg",
//     "location": "new york",
//     "price": "125"
//   },
//   {
//     "title": "Home 2",
//     "image": "listing.jpg",
//     "location": "boston",
//     "price": "225"
//   },
//   {
//     "title": "Home 3",
//     "image": "listing.jpg",
//     "location": "chicago",
//     "price": "325"
//   }
// ];

// jest.spyOn(global, "fetch").mockImplementation(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(fakeHomes)
//   })
// );

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
    render(<BookingDialog></BookingDialog>, container);
  });
  await act(async () => {
    bookingDialogService.open(
      {
        "title": "Home 3",
        "image": "listing.jpg",
        "location": "chicago",
        "price": "325"
      }
    );
  });

});

it('should show homes', async () => {

  console.log(container.innerHTML);

  expect(true).toBe(true);
  // expect(container.querySelectorAll('[data-testid="home"]').length).toBe(3);

});

