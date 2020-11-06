import React, { useEffect, useState } from 'react';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    // const homesDataPromise = apiClient.getHomes();
    const homesDataPromise = Promise.resolve([
      {
        title: "Test home 1",
        image: "listing.jpg",
        location: "Test location 1",
        price: "1",
      },
      {
        title: "Test home 2",
        image: "listing.jpg",
        location: "Test location 2",
        price: "2",
      },
      {
        title: "Test home 3",
        image: "listing.jpg",
        location: "Test location 3",
        price: "3",
      }
    ]);

    homesDataPromise.then(homesData => setHomesState(homesData));

  }, []);

  let homes;

  homes = homesState.map((home, index) => {
    return (
      <div data-testid="home" key={ index }>Home!</div>
    );
  });

  return (
    <div>
      { homes }
    </div>
  );
}
