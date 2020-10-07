import React, { useEffect, useState } from 'react';

// const homesData = [
//   {
//     "title": "Home 1",
//     "image": "listing.jpg",
//     "location": "new york",
//     "price": "125"
//   },
//   {
//     "title": "Home 2",
//     "image": "listing.jpg",
//     "location": "boston",
//     "price": "225"
//   },
//   {
//     "title": "Home 3",
//     "image": "listing.jpg",
//     "location": "chicago",
//     "price": "325"
//   }
// ];

let homesData = [];

export default function Homes() {

  const [homesState, setHomesState] = useState([]);


  useEffect(() => {

    fetch('https://run.mocky.io/v3/6474432c-4bae-4807-bfbe-427b252f0b76')
      .then(homes => homes.json())
      .then(homes => setHomesState(homes));

  });

  const homes = homesState.map((home, i) => {
    return (
      <div data-testid="home" key={ i }>
        <img data-testid="image" src={ home.image } alt="" />
        <div data-testid="title">
          { home.title }
        </div>
        <div data-testid="location">
          { home.location }
        </div>
      </div>
    );
  });

  return (
    <>
      { homes }
    </>
  );
}
