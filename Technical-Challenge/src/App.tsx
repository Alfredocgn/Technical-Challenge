import './App.css'
import {FormEvent} from 'react'
import { Movies, } from './components/MoviesList'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'






function App() {
  const {search,setSearch,error} = useSearch()
  const {movies,getMovies} = useMovies({search})


  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()
    getMovies({search})
    setSearch('')

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newValue = e.target.value
    setSearch(newValue)
    console.log(newValue)  
  }


  return (
    <div className='page'>
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" placeholder="Star Wars, Matrix, Avengers..." />
          <button  type="submit">Search</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main className='movies'>
        {<Movies movies={movies}/>}
      </main>
    </div>
  )
}

export default App
