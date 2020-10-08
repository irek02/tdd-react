import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

export default function Homes() {

  const [homesState, setHomesState] = useState([]);

  useEffect(() => {

    apiClient.getHomes().then(homesData => {

      const homes = homesData.map((home, i) => {
        return (
          <div data-testid="home" key={ i }>
            <div data-testid="home-title">{ home.title }</div>
          </div>
        );
      });

      setHomesState(homes);

    });

  }, []);


  return (
    <>
      { homesState }
    </>
  );
}
