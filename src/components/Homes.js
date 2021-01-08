import { Dialog, DialogContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import bookingDialogService from '../services/bookingDialogService';
import HomeBooking from './HomeBooking';
import Notification from './Notification';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    const homesDataPromise = apiClient.getHomes();

    homesDataPromise.then(homesData => setHomesState(homesData));

  }, []);

  const [bookingDialogState, setBookingDialogState] = useState({ open: false });

  useEffect(() => {

    const subscription = bookingDialogService.events$.subscribe(state => setBookingDialogState(state));

    return () => subscription.unsubscribe();

  }, []);

  let homes;

  homes = homesState.map((home, index) => {
    return (
      <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-3" key={ index }>
        <div data-testid="home" className="card w-100">
          <img data-testid="home-image" src={ home.image } alt="" className="card-img-top" />
          <div className="card-body">
            <div data-testid="home-title" className="card-title h5">{ home.title }</div>
            <div data-testid="home-location">{ home.location }</div>
            <div data-testid="home-price">${ home.price }/night</div>
            <div className="d-flex justify-content-end">
              <button
                data-testid="home-booking-btn"
                type="button"
                className="btn btn-primary"
                onClick={ () => bookingDialogService.open(home) }>
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container m-2">
      <h1>Homes</h1>
      <div className="row">
        { homes }
      </div>
      <Dialog
        maxWidth="xs"
        fullWidth={ true }
        open={ bookingDialogState.open }
        onClose={ () => bookingDialogService.close() }>
        <DialogContent>
          <HomeBooking home={ bookingDialogState.home } />
        </DialogContent>
      </Dialog>
      <Notification/>
    </div>
  );
}
