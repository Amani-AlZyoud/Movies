import '../App.css';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MovieContext } from '../Context/MyContext';
function Home() {

  const { movies } = useContext(MovieContext);
  console.log(movies)
  const [filteredMovies, setFilteredMovies] = useState();
  const [searchValue, setSearchValue] = useState();
  

  useEffect(() =>{
    if(movies[1])
    setFilteredMovies(movies)
  }, [movies])
 

  const onSearch = (event) => {
    const filter_movies =  movies.filter( (movie) =>{
      if(movie.title.toLowerCase().includes(event.target.value) || movie.title.includes(event.target.value)){
          return movie;
      }
  })
  setFilteredMovies(filter_movies);
  }

  console.log(filteredMovies)
  return (
    <>
     <h1 className='text-center mt-5 text-uppercase text-bold text-light'>Movies List</h1>
     <div class="container input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search" value={searchValue} onChange={onSearch} aria-label="Search" aria-describedby="search-addon" />
    </div>
    <div className="album py-5 bg-body-primary">
    <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {filteredMovies?.map(movie => (
             <div className="col" key={movie.id}  id='card-image'>
             <div className="card shadow-sm" style={{backgroundColor: 'black'}}>
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie-img'/>
               <div className="card-body">
                 <p className="card-text text-light text-capitalize fs-4">{movie.title}</p>
                   <h6 className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg> {movie.vote_average}</h6>
                 <div className="d-flex justify-content-end align-items-center">
                   <div className="btn-group">
                     <HashLink smooth to='/movie#'><button type="button" className="btn btn-sm btn-outline-light" onClick={
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
