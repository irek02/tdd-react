import React from 'react';
import './App.css';
import { Card, Button, Row, Col, Container, Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';

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

  const homes = homesData.map((home, i) => <Col><Home home={home} key={i}/></Col>);

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
          <div>{ props.home.location }</div>
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary">Book</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default App;
