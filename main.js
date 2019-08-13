console.log('hola');
fetch('https://raw.githubusercontent.com/noecor/fetch/master/cv.json')
//fetch('https://raw.githubusercontent.com/adasextagen/fetch/master/cv.json')
    .then(response => response.json())
    .then(res => console.log(res))