import { TroubleshootRounded } from "@mui/icons-material";
import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);
 
  const [watched, setWatched] = useState([]);

  const addToMyList = (movie) => {
   
    if (!myList.find((m) => m.imdbID === movie.imdbID)) {
      setMyList((prevList) => [...prevList, movie]);
   
    }
  };

  const removeFromMyList = (movieId) => {
    setMyList((prevList) => prevList.filter((o) => o.imdbID !== movieId));
  };

  const isInMyList = (movieId) => {
    return myList.some((movie) => movie.imdbID === movieId);
  };

  const addToWatched = (movie) => {
    if (!watched.some((m) => m.imdbID === movie.imdbID)) {
      setWatched((prevWatched) => [...prevWatched, movie]);
    }
  };

  const removeFromWatched = (movieId) => {
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== movieId)
    );
  };

  const isInWatched = (movieId) => {
    return watched.some((movie) => movie.imdbID === movieId);
  };




  return (
    <MovieContext.Provider
      value={{
        myList,
        watched,
        addToMyList,
        removeFromMyList,
        addToWatched,
        removeFromWatched,
        isInWatched,
        isInMyList,
        
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
