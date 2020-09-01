import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Homes from "./Homes";

let container = null;

beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {

  unmountComponentAtNode(container);
  container.remove();
  container = null;

});

// beforeEach(() => {

//   act(() => {
//     render(<Header></Header>, container);
//   });

// });

it('should show logo', async () => {

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

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Homes></Homes>, container);
  });

  // act(() => {
  //   render(<Homes></Homes>, container);
  // });

  console.log(container.innerHTML);

  // expect(container.querySelector('[data-testid="logo"]')).toBeTruthy();

});

// it('should show search', () => {

//   expect(container.querySelector('[data-testid="search"]')).toBeTruthy();

// });

// it('should show menu', () => {

//   expect(container.querySelector('[data-testid="menu"]')).toBeTruthy();

// });

// it('should show filters', () => {

//   expect(container.querySelector('[data-testid="home-type"]')).toBeTruthy();
//   expect(container.querySelector('[data-testid="dates"]')).toBeTruthy();
//   expect(container.querySelector('[data-testid="guests"]')).toBeTruthy();
//   expect(container.querySelector('[data-testid="price"]')).toBeTruthy();
//   expect(container.querySelector('[data-testid="rooms"]')).toBeTruthy();
//   expect(container.querySelector('[data-testid="amenities"]')).toBeTruthy();

// });
