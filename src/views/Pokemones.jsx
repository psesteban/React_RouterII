import { useContext } from 'react'
import { PokemonContext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pokemones = () => {
  const { pokemons, loading, error, selectedPokemon, data } = useContext(PokemonContext)
  const navigate = useNavigate()
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error.message}</p>

  const handleSelect = (selectedUrl) => {
    selectedPokemon(selectedUrl)
  }

  const features = () => {
    navigate(`/pokemon/${data.name}`)
  }
  return (
    <Container className='text-center m-4'>
      {data ? <h1>Pokemon seleccionado: {data.name}</h1> : <h1>Selecciona un Pokemon</h1>}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Pokemones
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {pokemons.map((pokemon) => (
            <Dropdown.Item key={pokemon.url} eventKey={pokemon.url}> {pokemon.name || 'No name'}</Dropdown.Item>
          ))}

        </Dropdown.Menu>
      </Dropdown>
      {data ? <img src={data.sprites.front_default} alt={data.name} /> : null}
      <Button variant='dark' onClick={features}>Ver Detalle</Button>
    </Container>
  )
}
export default Pokemones
