import React from 'react';
import './App.css';
import { Card, Button, Row, Col, Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, List, ListItem, DialogContent } from '@material-ui/core';
import PropTypes from 'prop-types';

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

  const [dialogState, setDialogState] = React.useState({ open: false, home: null });
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = (home) => {
    console.log('click!', home)
    setDialogState({ open: true, home });
  };

  const handleClose = () => {
    setDialogState({ open: false, home: null });
    // setSelectedValue(value);
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
  const { onClose, selectedValue, dialogState } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  if (!dialogState.open) {
    return null;
  }

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  return (
    <Dialog onClose={handleClose} open={dialogState.open}>
      <DialogTitle id="simple-dialog-title">Book {dialogState.home.title}</DialogTitle>
      <DialogContent>
        ${dialogState.home.price} per night
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  // onClose: PropTypes.func.isRequired,
  // dialogState: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
};

export default App;
