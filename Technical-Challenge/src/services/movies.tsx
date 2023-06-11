


const API_KEY = '105423ed'

export const searchMovies = async ({search} :{search:string}) =>{
  if(search === '') return null ;

  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()
  
    const movies = data.Search
  
    return movies?.map((movie: { imdbID: string; Title: string; Year: string; Poster: string; } ) =>({
      id : movie.imdbID,
      title : movie.Title,
      year : movie.Year,
      image : movie.Poster,
    }))

  }catch(e){
    throw new Error ('Error searching movies')
  }


}