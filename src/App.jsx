import { useEffect, useState } from 'react'
import './App.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Pokemon from './components/Pokemon'
import Update from './components/Update'
import Pagination from './components/Pagination'

const todo1 = {
  item: "test1",
  status: "In Progress"
}
const todo2 = {
    item: "test2",
    status: "To do"
}
const todo3 = {
    item: "test3",
    status: "Done"
}
const update1 = {
  startTime: 123456,
  endTime: 300000,
  user: {
    id: 123,
    name: 'bob'
  },
  status: 'shared',
  time: 123456,
  happyScore: 'happy'
}
const update2 = {
  startTime: 123456,
  endTime: 300000,
  user: {
    id: 123,
    name: 'sally'
  },
  status: 'review',
  time: 123456,
  happyScore: 'happy'
}
const update3 = {
  startTime: 123456,
  endTime: 300000,
  user: {
    id: 123,
    name: 'joe'
  },
  status: 'shared',
  time: 123456,
  happyScore: 'unhappy'
}


// function App() {
//   // const [updates, setUpdates] = useState([update1, update2, update3])
//   const [pokemons, setPokemons] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [pokemonPerPage, setPokemonPerPage] = useState(3)
//   // const [paginatedPokemons, setPaginatedPokemons] = useState([])


//   // https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
//   // useEffect(() => {
//   //   async function getPokemon() {
//   //     try {
//   //       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
//   //       if (!response.ok) {
//   //         throw new Error('error getting data')
//   //       }

//   //       const data = await response.json()
//   //       console.log(data.results)
//   //       // setPokemons(p => p =[...data.results])
//   //       setPokemons([...data.results])
//   //       setIsLoading(false)
//   //     } catch(error) {
//   //       console.log(error)
//   //     }
//   //   }

//   //   getPokemon()
//   // }, [])
  
//   useEffect(() => {
//     const urls = [
//       "https://pokeapi.co/api/v2/pokemon/ditto",
//       "https://pokeapi.co/api/v2/pokemon/celebi",
//       "https://pokeapi.co/api/v2/pokemon/pikachu",
//       "https://pokeapi.co/api/v2/pokemon/lugia",
//       "https://pokeapi.co/api/v2/pokemon/squirtle",
//     ]
//     async function fetchAllApis() {
//       try {
//         const responses = await Promise.all(urls.map(url => fetch(url)))
//         if (responses.some(response => !response.ok)) {
//           throw new Error('error getting tdata')
//         }
//         const data = await Promise.all(responses.map(response => response.json()))
//         setPokemons(p => [...data])
//         setIsLoading(false)
//       } catch(error) {
//         console.log(error)
//       }
//     }

//     fetchAllApis()
//   }, [])

//   const indexOfLastPokemon = currentPage * pokemonPerPage
//   const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
//   const paginatedPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
//   // not sure why this causes so many re-renders
//   // setPaginatedPokemons([...paginated])
//   // setPaginatedPokemons(p => p = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon))

//   function updatePagination(pageNumber) {
//     setCurrentPage(c => c = pageNumber)
//   }

//   return (
//     <>
//       {/* { updates.map((update, i) => <Update key={i} update={update}/> )} */}
//       {/* { !isLoading && pokemons.map((pokemon, i) => <Pokemon key={i} pokemon={pokemon} />) } */}
//       { !isLoading && paginatedPokemons.length && paginatedPokemons.map((pokemon, i) => <Pokemon key={i} pokemon={pokemon} />) }
//       <Pagination totalPosts={pokemons.length} postsPerPage={pokemonPerPage} updatePagination={updatePagination}/>
//     </>
//   )
// }

// export default App

function App() {

  const [todos, setTodos] = useState([todo1, todo2, todo3])
  const [hasApiError, setHasApiError] = useState(false)
  const [celebi, setCelebi] = useState(null)
  // const [pikachu, setPikachu] = useState(null)


  const [pokemons, setPokemons] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage, setPokemonPerPage] = useState(10)

  useEffect(() => {
    async function fetchPokemon() {
      const urls = [
        "https://pokeapi.co/api/v2/pokemon/celebi",
        "https://pokeapi.co/api/v2/pokemon/pikachu",
      ]

      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)))

        if (responses.some(response => !response.ok)) {
          throw new Error("error calling an api")
        }

        const data = await Promise.all(
          responses.map(response => response.json())
        )
        setPokemons(p => [...data])
      } catch(error) {
        console.log(error)
        setHasApiError(true)
      }
    }

    fetchPokemon()
  }, [])

  // useEffect(() => {
  //   async function fetchCelebi() {
  //     try {
  //       const response = await fetch("https://pokeapi.co/api/v2/pokemon/celebi")
  //       if (!response.ok) {
  //         setHasApiError(h => h = true)
  //         throw new Error("error fetching data")
  //       }
  //       const data = await response.json()
  //       console.log('data', data)
  //       setCelebi(data)
  //     } catch(error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchCelebi()
  // }, [])


  const handleAddTodo = (todoItem) => {
    const newTodo = {
      item: todoItem,
      status: "To do"
    }
    setTodos(t => [...t, newTodo])
  }

  const handleDeleteTodo = (todoIdx) => {
    setTodos(t => t.filter((_, i) => i !== todoIdx))
  }

  const handleEditTodo = (todoIdx, todoItem) => {    
    const oldTodo = todos[todoIdx]

    const updatedTodo = {
      ...oldTodo,
      item: todoItem
    }
    // this doesn't work
    // setTodos(t => t[todoIdx] = {...updatedTodo})

    // WHY DO I HAVE TO MAP THIS? why am i not allowed to just set the arr element?
    setTodos(t => t.map((todo, i) => todoIdx === i ? updatedTodo : todo))
    
    // this also works
    // setTodos(t => {
    //   t[todoIdx] = {...updatedTodo}
    //   return [...t]
    // })

    // this also works
    // let newTodosArr = [...todos]
    // newTodosArr[todoIdx] = updatedTodo
    // setTodos(t => [...newTodosArr])

    // this doesn't work
    // setTodos(t => t[todoIdx] = {
    //   ...t[todoIdx],
    //   item: todoItem
    // })
  }

  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const paginatedPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
  // not sure why this causes so many re-renders
  // setPaginatedPokemons([...paginated])
  // setPaginatedPokemons(p => p = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon))

  function updatePagination(pageNumber) {
    setCurrentPage(c => c = pageNumber)
  }

  return (
    <>
      <div className="body">
        <div className="todo-container">

          { hasApiError && <p> has api error</p>}
          { celebi && <Pokemon pokemon={celebi}/>}

          { !hasApiError && pokemons.map((pokemon, i) => <Pokemon key={i} pokemon={pokemon} />)}

          <Pagination totalPosts={pokemons.length} postsPerPage={pokemonPerPage} updatePagination={updatePagination}/>
          
          <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
          <TodoForm handleAddTodo={handleAddTodo}  />
        </div>
      </div>
    </>
  )
}

export default App
