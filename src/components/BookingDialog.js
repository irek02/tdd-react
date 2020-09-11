import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import bookingDialogService from '../services/bookingDialogService';
import notificationService from "../services/notificationService";

export default function BookingDialog(props) {

  const [dialogState, setDialogState] = useState({});

  useEffect(() => {

    const subscription = bookingDialogService.events$
      .subscribe(state => setDialogState(state));

    return () => subscription.unsubscribe();

  });

  const [formState, setFormState] = useState({ fromDate: '', untilDate: '' });
  const [totalCost, setTotalCost] = useState('--');

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

    const total = nights * dialogState.home.price;

    if (total > 0 && total < 900000) {
      return '$' + total;
    } else {
      return '--';
    }
  }

  const handleBooking = async () => {
    const response = await fetch('https://run.mocky.io/v3/4a53ec91-a1e2-4a38-8a3f-188d7173fc5f');
    const responseJson = await response.json();
    bookingDialogService.close();
    notificationService.open(responseJson.response);
  };

  if (!dialogState.open) {
    return null;
  }

  return (
    <Dialog
      maxWidth='xs'
      fullWidth={true}
      onClose={props.onClose}
      open={dialogState.open}
    >
      <DialogTitle id="simple-dialog-title">Book {dialogState.home.title}</DialogTitle>
      <DialogContent>
        <div className="mb-3">
          <span className="font-weight-bold text-primary text-large">${dialogState.home.price}</span> per night
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Choose your check-in date</label>
          <input
            id="checkInDate"
            type="date"
            className="form-control"
            value={formState.fromDate}
            onChange={handleFromDateChange} />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Choose your check-out date</label>
          <input
            id="checkOutDate"
            type="date"
            className="form-control"
            value={formState.untilDate}
            onChange={handleUntilDateChange} />
        </div>
        <div className="my-3 text-right">
          <span className="font-weight-bold text-large">Total: {totalCost}</span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="primary" onClick={handleBooking}>Book</Button>
      </DialogActions>
    </Dialog>
  );

}
