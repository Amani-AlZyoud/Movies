import { createContext, useState } from "react";
import { useEffect } from "react";


export const MovieContext = createContext();

export function MovieProvider({ children }) {


    const [movies, setMovies] = useState([]);


   useEffect(() => {

            fetch('http://127.0.0.1:1000/')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
  }, []);


    return (
        <>
            <MovieContext.Provider
                value={{ movies }}>
                {children}
            </MovieContext.Provider>
        </>
    );
}