import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import { Card, Button, Row, Col, Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogActions, Snackbar } from '@material-ui/core';

function App() {

  const homesData = [
    {
      "title": "Home 1",
      "image": "listing.jpg",
      "location": "new york",
      "price": "125"
    },
    {
      "title": "Home 2",
      "image": "listing.jpg",
      "location": "boston",
      "price": "225"
    },
    {
      "title": "Home 3",
      "image": "listing.jpg",
      "location": "chicago",
      "price": "325"
    }
  ];

  const [dialogState, setDialogState] = useState({ open: false, home: null });
  const [snackBarState, setSnackBarState] = useState({ open: false, message: null });

  const handleClickOpen = (home) => {
    setDialogState({ open: true, home });
  };

  const handleClose = (message) => {
    setDialogState({ open: false, home: null });
    setSnackBarState({ open: true, message });
  };

  const handleSnackBarClose = () => {
    setSnackBarState({ open: false, message: null });
  };

  const homes = homesData.map((home, i) => <Col key={i}><Home home={home} handleClickOpen={handleClickOpen}/></Col>);

  return (
    <div className="App">
      <Navbar className="py-3 border-bottom">
        <Navbar.Brand href="#"><img src="logo192.png" width="40" alt="" /></Navbar.Brand>
        <Form inline className="mr-auto w-50">
          <FormControl type="text" placeholder="Search homes" className="w-50" />
        </Form>
        <Nav className="ml-auto text-uppercase">
          <Nav.Link href="#home">Become a host</Nav.Link>
          <Nav.Link href="#link">Help</Nav.Link>
          <Nav.Link href="#link">Sign up</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="m-0 px-4 py-2 container-fluid mw-100 border-bottom">
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Home type</Button>
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Dates</Button>
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Guests</Button>
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Price</Button>
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Rooms and beds</Button>
        <Button variant="outline-secondary" className="text-nowrap mr-4 py-1">Amenities</Button>
      </Container>
      <Container className="m-2">
        <h1>Homes</h1>
        <Row>
          { homes }
        </Row>
      </Container>
      <SimpleDialog dialogState={dialogState} onClose={handleClose} />
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
      <Card.Img variant="top" src={ props.home.image } />
      <Card.Body>
        <Card.Title>{ props.home.title }</Card.Title>
        <Card.Text>
          { props.home.location }
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={() => props.handleClickOpen(props.home)}>Book</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function SimpleDialog(props) {
  const { onClose, dialogState } = props;

  const [formState, setFormState] = useState({ fromDate: '', untilDate: '' });
  const [totalCost, setTotalCost] = useState('--');

  const handleClose = (message) => onClose(message);
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
    handleClose(responseJson.response);
  };

  if (!dialogState.open) {
    return null;
  }

  return (
    <Dialog
      maxWidth='xs'
      fullWidth='true'
      onClose={handleClose}
      open={dialogState.open}
    >
      <DialogTitle id="simple-dialog-title">Book {dialogState.home.title}</DialogTitle>
      <DialogContent>
        <div>
          <span class="text-primary">${dialogState.home.price}</span> per night
        </div>
        <div>
          <input type="date" value={formState.fromDate} onChange={handleFromDateChange} />
        </div>
        <div>
          <input type="date" value={formState.untilDate} onChange={handleUntilDateChange} />
        </div>
        <div>
          Total: {totalCost}
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="primary" onClick={handleBooking}>Book</Button>
      </DialogActions>
    </Dialog>
  );
}

export default App;
