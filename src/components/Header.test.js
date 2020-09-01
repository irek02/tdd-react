import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./Header";

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

beforeEach(() => {

  act(() => {
    render(<Header></Header>, container);
  });

});

it('should show logo', () => {

  expect(container.querySelector('[data-testid="logo"]')).toBeTruthy();

});

it('should show search', () => {

  expect(container.querySelector('[data-testid="search"]')).toBeTruthy();

});

it('should show menu', () => {

  expect(container.querySelector('[data-testid="menu"]')).toBeTruthy();

});

it('should show filters', () => {

  expect(container.querySelector('[data-testid="home-type"]')).toBeTruthy();
  expect(container.querySelector('[data-testid="dates"]')).toBeTruthy();
  expect(container.querySelector('[data-testid="guests"]')).toBeTruthy();
  expect(container.querySelector('[data-testid="price"]')).toBeTruthy();
  expect(container.querySelector('[data-testid="rooms"]')).toBeTruthy();
  expect(container.querySelector('[data-testid="amenities"]')).toBeTruthy();

});
