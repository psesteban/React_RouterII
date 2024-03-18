import { useContext } from 'react'
import { PokemonContext } from '../context/ApiContext'
import 'bootstrap/dist/css/bootstrap.min.css'

const Gallery = () => {
  const { pokemons } = useContext(PokemonContext)

  return (
    <div>
      {pokemons.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </div>
  )
}
export default Gallery
