import React from 'react';

export default function HomeBooking(props) {

  if (!props.home) {
    return <div data-testid="empty"></div>
  }

  return (
    <>
      <div data-testid="title">{ props.home.title }</div>
      <div data-testid="price">{ props.home.price }</div>
      <input data-testid="check-in" />
      <input data-testid="check-out" />
    </>
  );

}
