import React from 'react';

export default function HomeBooking(props) {
  return (
    <>
      <div data-testid="home-title">{ props.home.title }</div>
      <div data-testid="home-price">{ props.home.price }</div>
      <input data-testid="check-in-input" />
      <input data-testid="check-out-input" />
    </>
  );
}
