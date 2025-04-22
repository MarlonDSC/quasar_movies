import React, { createContext, useContext } from 'react';
import { moviesStore, MoviesStore } from '../stores/movies-store';

const MoviesStoreContext = createContext<MoviesStore | null>(null);

export const MoviesStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MoviesStoreContext.Provider value={moviesStore}>{children}</MoviesStoreContext.Provider>;
};

export const useMoviesStore = () => {
  const context = useContext(MoviesStoreContext);
  if (!context) {
    throw new Error("useMoviesStore must be used within an MoviesStoreProvider");
  }
  return context;
};