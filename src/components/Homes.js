import React, { useEffect, useState } from "react";
import HomeBooking from './HomeBooking';
import bookingDialogService from '../services/bookingDialogService';
import Notification from "./Notification";
import { Dialog, DialogContent } from "@material-ui/core";

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    if (homesState.length > 0) return;

    fetch('https://run.mocky.io/v3/62de12a6-dce1-4b9c-a34c-c77e275df98a')
      .then(response => response.json())
      .then(responseJson => {
        const homes = responseJson.map((home, i) =>
          <div class="col-6 col-md-6 col-lg-4 col-xl-3 mb-3" key={i}>
            <Home home={home} handleClickOpen={() => bookingDialogService.open(home)} />
          </div>);
        setHomesState(homes);
      });

  });

  const [dialogState, setDialogState] = useState({ open: false, home: null });

  useEffect(() => {

    const subscription = bookingDialogService.events$
      .subscribe(state => setDialogState(state));

    return () => subscription.unsubscribe();

  });

  return (
    <>
      <div className="container m-2">
        <h1>Homes</h1>
        <div class="row align-items-start">
          {homesState}
        </div>
      </div>
      <Dialog
        maxWidth='xs'
        fullWidth={true}
        onClose={bookingDialogService.close}
        open={dialogState.open}
      >
        <DialogContent>
          <HomeBooking home={dialogState.home}></HomeBooking>
        </DialogContent>
      </Dialog>
      <Notification />
    </>
  );
}

function Home(props) {
  return (
    <div data-testid="home" class="card w-100">
      <img class="card-img-top" data-testid="image" src="listing.jpg" alt="" />
      <div class="card-body">
        <div class="card-title h5" data-testid="title">{props.home.title}</div>
        <p class="card-text">
          <span data-testid="location">{props.home.location}</span>
        </p>
        <div class="d-flex justify-content-end">
          <button
            data-testid="book-btn"
            type="button"
            class="btn btn-primary"
            onClick={() => props.handleClickOpen(props.home)}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
