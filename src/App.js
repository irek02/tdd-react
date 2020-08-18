import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';

function App() {

  const homesData = [
    {
      "title": "Home 1",
      "image": "assets/listing.jpg",
      "location": "new york",
      "price": "125"
    },
    {
      "title": "Home 2",
      "image": "assets/listing.jpg",
      "location": "boston",
      "price": "225"
    },
    {
      "title": "Home 3",
      "image": "assets/listing.jpg",
      "location": "chicago",
      "price": "325"
    }
  ];

  const homes = homesData.map((home, i) => <Home name={home} key={i}/>);

  return (
    <div className="App">
      { homes }
    </div>
  );
}

function Home(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
