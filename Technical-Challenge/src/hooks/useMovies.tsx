
import { Movie } from "../components/MoviesList";
import { searchMovies } from "../services/movies";
import {useMemo, useRef, useState,useCallback} from 'react'


export function useMovies({search,sort}:{search:string ; sort:boolean}){
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading,setLoading] = useState(false);
  const [,setError] = useState('')
  const previousSearch = useRef(search);

const getMovies = useCallback(async ({search}:{search: string}) => {
  if(search === previousSearch.current) return;

  try {
    setLoading(true)
    setError('')
    previousSearch.current = search 
    const newMovies = await searchMovies({search})
    setMovies(newMovies)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }catch(e : Error | any ){
    setError(e.message)
  }finally{
    setLoading(false)
  }

  },
[])

  const sortedMovies = useMemo(()=>{
    return sort
    ? [...movies].sort((a,b)=> a.title.localeCompare(b.title)) 
    : movies;
    
  },[movies,sort])


  return {movies:sortedMovies, getMovies,loading}
}