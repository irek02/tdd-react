const ApiClientService = {

  getHomes: () => {

    return fetch('https://run.mocky.io/v3/6474432c-4bae-4807-bfbe-427b252f0b76')
      .then(homes => homes.json());

  }

};

export default ApiClientService;
