import { Container, Row, Card, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { BookingDialog } from './BookingDialog';
import bookingDialogService from '../services/bookingDialogService';
import Notification from "./Notification";

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    if (homesState.length > 0) return;

    fetch('https://run.mocky.io/v3/6474432c-4bae-4807-bfbe-427b252f0b76')
      .then(response => response.json())
      .then(responseJson => {
        const homes = responseJson.map((home, i) =>
          <Col key={i}>
            <Home home={home} handleClickOpen={() => bookingDialogService.open(home)} />
          </Col>);
        setHomesState(homes);
      });

  });

  return (
    <>
      <Container className="m-2">
        <h1>Homes</h1>
        <Row>
          {homesState}
        </Row>
      </Container>
      <BookingDialog onClose={bookingDialogService.close} />
      <Notification />
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
