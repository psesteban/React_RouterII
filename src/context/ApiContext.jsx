import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PokemonContext = createContext(null)

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [linkApi, setLinkApi] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchPokemon = async (url) => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=400&offset=400')
      setPokemons(response.data.results)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const selectedPokemon = (url) => {
    setLinkApi(url)
    fetchPokemon(url)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (linkApi) {
      fetchPokemon(linkApi)
    }
  }, [linkApi])
  return (
    <PokemonContext.Provider value={{ pokemons, loading, error, data, selectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider
