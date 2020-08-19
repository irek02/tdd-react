import React from 'react';
import './App.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

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
      <Container className="mt-4">
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
          <div>{ props.home.price }</div>
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
