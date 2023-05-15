import '../App.css';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MovieContext } from '../Context/MyContext';
import Movie from './Movie';
function Home() {

    const { movies } = useContext(MovieContext)
    const [Movie, setMovie] = useState();
  return (
    <>
     <h1 className='text-center mt-5 text-uppercase text-bold text-light'>Movies List</h1>
    <div class="album py-5 bg-body-primary">
    <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {movies.map(movie => (
             <div class="col" key={movie.id}  id='card-image'>
             <div class="card shadow-sm" style={{backgroundColor: 'black'}}>
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie-img'/>
               <div class="card-body">
                 <p class="card-text text-light text-capitalize fs-4">{movie.title}</p>
                   <h6 class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> {movie.vote_average}</h6>
                 <div class="d-flex justify-content-end align-items-center">
                   <div class="btn-group">
                     <HashLink smooth to='/movie#'><button type="button" class="btn btn-sm btn-outline-light" onClick={
                        () => {
                           localStorage.setItem('movie', JSON.stringify(movie));
                        }
                     }>View</button></HashLink>
                   </div>
                 </div>
               </div>
             </div>
           </div>
    ))}


  </div>
  </div>
  </div> 
  </>
  );
}

export default Home;
