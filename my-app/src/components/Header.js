import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#8294C4"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} width={130} alt="logo"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{backgroundColor: 'white'}}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/' className="nav-link text-light" aria-current="page" href="#">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              MOVIES
            </a>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}

export default Header