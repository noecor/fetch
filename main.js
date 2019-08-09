fetch('https://raw.githubusercontent.com/noecor/fetch/master/cv.json')
    .then(response => response.json())
    .then(response => {console.log(response);
    })