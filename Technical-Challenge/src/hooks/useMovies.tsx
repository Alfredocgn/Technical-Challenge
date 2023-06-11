
import { Movie } from "../components/MoviesList";
import { searchMovies } from "../services/movies";
import {useState} from 'react'

export type useMoviesProps = {
  search:string;
}

export function useMovies({search}:useMoviesProps){
  const [movies, setMovies] = useState<Movie[]>([]);

const getMovies = async ({search} : useMoviesProps) => {

  try {
    const newMovies = await searchMovies({search})
    setMovies(newMovies)
  }catch(e){
    console.log(e)
  }

  }
  return {movies, getMovies}
}