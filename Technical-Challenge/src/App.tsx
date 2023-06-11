import './App.css'
import {FormEvent,useCallback,useState} from 'react'
import { Movies, } from './components/MoviesList'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'






function App() {
  const [sort,setSort]= useState(false)
  const {search,setSearch,error} = useSearch()
  const {movies,getMovies,loading} = useMovies({search,sort})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((search: string) =>{
      getMovies({search})
    },300),[getMovies]
  )

  const handleSort = () => {
    setSort(!sort)
  }


  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()
    getMovies({search})


  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const newValue = e.target.value
    setSearch(newValue)
    debouncedGetMovies(newValue)

  }


  return (
    <div className='page'>
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" placeholder="Star Wars, Matrix, Avengers..." />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button  type="submit">Search</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main className='movies'>
        {loading? <p style={{display:'flex',justifyContent:'center'}}>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
