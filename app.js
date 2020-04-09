// This function loads pokemon data from the Pokemon API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    // const pokemonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0]; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsons.character}</strong></p>
          <p>${simpsons.quote}</p>
          <img src="${simpsons.image}" />
        `;
        document.querySelector('#pokemon').innerHTML = simpsonsHtml;
      });
  }
  
  fetchSimpsonJSON();