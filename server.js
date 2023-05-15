const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDMzNTUwZjQwZjYwMjM3OGM3ODAzNWI1YThhNjk2MiIsInN1YiI6IjY0NjIzMzVkZGJiYjQyMDBmYzg4NjUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03F3EPbjM2YdFuwf7SdWJ8vIEPdtsmhrazukGKQ93oI'
  }
};


const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/', (req,res) => {
  
fetch('https://api.themoviedb.org/3/account/19482694/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
.then(response => response.json())
.then(response =>{ 
        res.json(response.results);
})
.catch(err => console.error(err));

});

// Starting the server
const port = 1000;
app.listen(port);

console.log('App is listening on port ' + port);