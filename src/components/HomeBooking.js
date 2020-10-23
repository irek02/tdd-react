import React, { useState } from 'react';
import moment from 'moment';
import bookingDialogService from '../services/bookingDialogService';
import notificationService from "../services/notificationService";

export default function HomeBooking(props) {

  const [formState, setFormState] = useState({ fromDate: '', untilDate: '' });
  const [totalCost, setTotalCost] = useState('--');

  if (!props.home) {
    return '';
  }

  const handleFromDateChange = event => {
    const fromDate = event.target.value;
    setFormState({ ...formState, fromDate });
    setTotalCost(calculateTotal(fromDate, formState.untilDate));
  }

  const handleUntilDateChange = event => {
    const untilDate = event.target.value;
    setFormState({ ...formState, untilDate });
    setTotalCost(calculateTotal(formState.fromDate, untilDate));
  }

  const calculateTotal = (fromDate, untilDate) => {
    const checkInDate = moment(fromDate, 'YYYY-MM-DD');
    const checkOutDate = moment(untilDate, 'YYYY-MM-DD');
    const nights = checkOutDate.diff(checkInDate, 'days');

    const total = nights * props.home.price;

    if (total > 0 && total < 900000) {
      return '$' + total;
    } else {
      return '--';
    }
  }

  const handleBooking = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/4a53ec91-a1e2-4a38-8a3f-188d7173fc5f'
    );
    const responseJson = await response.json();
    bookingDialogService.close();
    notificationService.open(responseJson.response);
  };

  return (
    <>
      <h1 data-testid="title">Book {props.home.title}</h1>
      <div data-testid="price" className="mb-3">
        <span className="font-weight-bold text-primary text-large">
          ${props.home.price}
        </span> per night
      </div>
      <div className="form-group">
        <label htmlFor="checkInDate">Choose your check-in date</label>
        <input
          data-testid="check-in"
          id="checkInDate"
          type="date"
          className="form-control"
          value={formState.fromDate}
          onChange={handleFromDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkOutDate">Choose your check-out date</label>
        <input
          data-testid="check-out"
          id="checkOutDate"
          type="date"
          className="form-control"
          value={formState.untilDate}
          onChange={handleUntilDateChange} />
      </div>
      <div data-testid="total" className="my-3 text-right">
        <span className="font-weight-bold text-large">
          Total: {totalCost}
        </span>
      </div>
      <div className="d-flex justify-content-end">
        <button
          data-testid="book-btn"
          type="button"
          class="btn btn-primary"
          onClick={handleBooking}>
          Book
        </button>
      </div>
    </>
  );

}
