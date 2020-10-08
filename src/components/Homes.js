import React, { useEffect, useState } from 'react';
import ApiClientService from '../services/ApiClientService';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    ApiClientService.getHomes()
      .then(homes => setHomesState(homes));

  }, []);

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
