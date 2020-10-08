import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import apiClientService from '../services/apiClientService';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    apiClientService.getHomes()
      .then(homes => setHomesState(homes));

  }, []);

  const homes = homesState.map((home, i) => {
    return (
      <Col key={i}>
        <Card data-testid="home" style={ { width: '350px' } }>
          <Card.Img data-testid="home-image" variant="top" src={ home.image } alt="" />
          <Card.Body>
            <Card.Title data-testid="home-title">{ home.title }</Card.Title>
            <Card.Text data-testid="home-location">{ home.location }</Card.Text>
            <Card.Text data-testid="home-price">${ home.price } per night</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      <Container className="m-2">
        <h1>Homes</h1>
        <Row>
          { homes }
        </Row>
      </Container>
    </>
  );
}
