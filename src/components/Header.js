import React from 'react';
import { Button, Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap';

export function Header() {
  return (
    <div>
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
    </div>
  );
}
