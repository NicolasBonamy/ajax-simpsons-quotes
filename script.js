function fetchSimpsonsJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        const simpsonsHtml = `
          <p><strong>${simpsons[0].character}</strong></p>
          <img src="${simpsons[0].image}" />
          <p>${simpsons[0].quote}</p>
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
      });
  }
  
  fetchSimpsonsJSON();