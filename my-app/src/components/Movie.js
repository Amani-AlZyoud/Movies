import React from 'react'

const Movie = () => {
    const movie  = JSON.parse(localStorage.getItem('movie'));
    console.log(movie)
  return (
    <>

<div class="container col-xxl-8 px-4 py-5 bg-white my-5 rounded-3 shadow-lg">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="d-block mx-lg-auto img-fluid rounded-3 shadow-sm" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3" style={{color: "#0C134F"}}>{movie.title}</h1>
        <h5 style={{color: 'grey'}}>{movie.vote_average}</h5>
        <p class="lead">{movie.overview}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-lg px-4 me-md-2" style={{backgroundColor: '#8294C4'}}>Watch</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Movie