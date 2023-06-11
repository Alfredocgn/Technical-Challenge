
export type Movie = {
  title:string;
  year:string;
  id:string;
  image:string;
}

export type MoviesListProps = {
  movies: Movie[]
}

export function MoviesList({movies}:MoviesListProps) {
  return (
    <ul className="movies">
      {
        movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMovies (){
  return(
    <p>Movie not Found</p>
  )
}

export function Movies ({movies} : MoviesListProps) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies 
    ? <MoviesList movies={movies}/>
    : <NoMovies/> 

  )
}