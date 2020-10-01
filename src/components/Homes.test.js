import { getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import Homes from './Homes';

let container;

beforeEach(() => {

  container = render(<Homes />).container;

});

it('should show homes', () => {

  expect(getAllByTestId(container, 'home').length).toBe(3);

});
