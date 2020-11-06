import { getAllByTestId, render } from '@testing-library/react';
import React from 'react';
import Homes from './Homes';

let container = null;

beforeEach(async () => {

  container = render(<Homes/>).container;

});

it('should show homes', () => {

  const homes = getAllByTestId(container, 'home');

  expect(homes.length).toBeGreaterThan(0);

});
