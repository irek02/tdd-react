import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    const homesDataPromise = apiClient.getHomes();

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
