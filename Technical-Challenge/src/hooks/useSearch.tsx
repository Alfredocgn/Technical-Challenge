import {useState,useRef,useEffect} from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error,setError]= useState('')
  const isFirstInput = useRef(true)

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    // if(search === ''){
    //   setError('Input cant be empty')
    //   return
    // }
    if (search.match(/^\d+$/)) {
      setError('Input must be a string')
      return
    }
  // if(search.length <2){
  //     setError('Input must be at least 2 characters')
  //     return
  //   }  
    setError('')
  },[search])
  return {search,setSearch,error}

}