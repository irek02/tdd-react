import { Container, Row, Card, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { BookingDialog } from './BookingDialog';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);
  const [dialogState, setDialogState] = useState({ open: false, home: null });
  const [snackBarState, setSnackBarState] = useState({ open: false, message: null });

  const handleClickOpen = (home) => {
    setDialogState({ open: true, home });
  };

  const handleClose = (message) => {
    setDialogState({ open: false, home: null });
    if (message) {
      setSnackBarState({ open: true, message });
    }
  };

  const handleSnackBarClose = () => {
    setSnackBarState({ open: false, message: null });
  };

  useEffect(() => {

    if (homesState.length > 0) return;

    fetch('https://run.mocky.io/v3/6474432c-4bae-4807-bfbe-427b252f0b76')
      .then(response => response.json())
      .then(responseJson => {
        const homes = responseJson.map((home, i) => <Col key={i}><Home home={home} handleClickOpen={handleClickOpen} /></Col>);
        setHomesState(homes);
      });

  });

  return (
    <div>
      <Container className="m-2">
        <h1>Homes</h1>
        <Row>
          {homesState}
        </Row>
      </Container>
      <BookingDialog dialogState={dialogState} onClose={handleClose} />
      <Snackbar
        open={snackBarState.open}
        onClose={handleSnackBarClose}
        autoHideDuration={3000}
        message={snackBarState.message}
      />
    </div>
  );
}

function Home(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.home.image} />
      <Card.Body>
        <Card.Title>{props.home.title}</Card.Title>
        <Card.Text>
          {props.home.location}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => props.handleClickOpen(props.home)}>Book</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
