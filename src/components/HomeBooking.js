import React, { useEffect, useState } from 'react';
import moment from "moment";
import apiClient from '../services/apiClient';

export default function HomeBooking(props) {

  const [checkInState, setCheckInState] = useState();
  const [checkOutState, setCheckOutState] = useState();
  const [totalPriceState, setTotalPriceState] = useState();

  // Having access to check-in and check-out dates, how do we calculate the total price?
  // setTotalPriceState(price?)
  useEffect(() => {

    const price = props.home ? props.home.price : 0;
    const checkInDate = moment(checkInState, 'YYYY-MM-DD');
    const checkOutDate = moment(checkOutState, 'YYYY-MM-DD');
    const nights = checkOutDate.diff(checkInDate, 'days');

    const total = nights * price;

    if (Number.isInteger(total)) {
      setTotalPriceState(total);
    } else {
      setTotalPriceState('--');
    }

  }, [checkInState, checkOutState, props]);

  if (!props.home) {
    return <div data-testid="empty"></div>
  }

  const handleBooking = () => {
    apiClient.bookHome(props.home, checkInState, checkOutState);
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
      <button
        data-testid="book-btn"
        onClick={ handleBooking }
      >Book</button>
    </>
  );

}
