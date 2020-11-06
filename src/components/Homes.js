import React from 'react';

export default function Homes() {

  // const homesDataPromise = apiClient.getHomes();
  const homesDataPromise = Promise.resolve([]);

  return (
    <div>
      <div data-testid="home">Home!</div>
    </div>
  );
}
