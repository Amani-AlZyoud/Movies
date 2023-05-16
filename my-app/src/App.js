import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import Footer from './components/Footer'
import React from 'react';
import {  MovieProvider } from './Context/MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {   
  return (
   <>
   <BrowserRouter>
   <MovieProvider>
       <Header />
       <Routes>
         <Route element={< Home />} path="/" />
         <Route element={< Movie />} path="/movie" />
       </Routes>
       <Footer/>
    </MovieProvider>
   </BrowserRouter>
 </>
  );
}

export default App;
