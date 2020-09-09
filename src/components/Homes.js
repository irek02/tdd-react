import { Container, Row, Card, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { BookingDialog } from './BookingDialog';
import bookingDialogStateService from '../services/bookingDialogStateService';
import snackBarStateService from "../services/snackBarStateService";

export default function Homes() {

  const [homesState, setHomesState] = useState([]);
  const [snackBarState, setSnackBarState] = useState({ open: false, message: null });

  useEffect(() => {

    if (homesState.length > 0) return;

    fetch('https://run.mocky.io/v3/6474432c-4bae-4807-bfbe-427b252f0b76')
      .then(response => response.json())
      .then(responseJson => {
        const homes = responseJson.map((home, i) =>
          <Col key={i}>
            <Home home={home} handleClickOpen={() => bookingDialogStateService.open(home)} />
          </Col>);
        setHomesState(homes);
      });

  });

  useEffect(() => {

    const subscription = snackBarStateService.state$
      .subscribe(state => setSnackBarState(state));

    return () => subscription.unsubscribe();

  });

  return (
    <>
      <Container className="m-2">
        <h1>Homes</h1>
        <Row>
          {homesState}
        </Row>
      </Container>
      <BookingDialog onClose={bookingDialogStateService.close} />
      <Snackbar
        open={snackBarState.open}
        onClose={snackBarStateService.close}
        autoHideDuration={3000}
        message={snackBarState.message}
      />
    </>
  );
}

function Home(props) {
  return (
    <Card style={{ width: '18rem' }} data-testid="home">
      <Card.Img data-testid="image" variant="top" src={props.home.image} />
      <Card.Body>
        <Card.Title data-testid="title">{props.home.title}</Card.Title>
        <Card.Text>
          <span data-testid="location">{props.home.location}</span>
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button
            data-testid="book-btn"
            variant="primary"
            onClick={() => props.handleClickOpen(props.home)}
          >
            Book
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
