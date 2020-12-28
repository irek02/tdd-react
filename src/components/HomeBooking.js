import React, { useState } from 'react';

export default function HomeBooking(props) {

  const [checkInState, setCheckInState] = useState();
  const [checkOutState, setCheckOutState] = useState();
  const [totalPriceState, setTotalPriceState] = useState();

  // Having access to check-in and check-out dates, how do we calculate the total price?
  // setTotalPriceState(price?)

  if (!props.home) {
    return <div data-testid="empty"></div>
  }

  return (
    <>
      <div data-testid="title">{ props.home.title }</div>
      <div data-testid="price">{ props.home.price }</div>
      <input
        data-testid="check-in"
        type="date"
        onChange={ e => setCheckInState(e.target.value) }
      />
      <input
        data-testid="check-out"
        type="date"
        onChange={ e => setCheckOutState(e.target.value) }
      />
      <div data-testid="total">{ totalPriceState }</div>
    </>
  );

}
