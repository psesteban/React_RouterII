import { useContext } from 'react'
import { PokemonContext } from '../context/ApiContext'
import { Button, Container, Card, ListGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './Pokemon.css'

const Pokemon = () => {
  const { data, loading } = useContext(PokemonContext)
  const navigate = useNavigate()
  const { id } = useParams()
  if (loading) return <p>Cargando...</p>
  const newSearch = () => {
    navigate('/pokemones')
  }

  return (
    <Container className='container-pokemon'>
      <h1>{id}</h1>
      <Card className='card-pokemon'>
        <Card.Img className='image-pokemon' variant='top' src={data.sprites.other.dream_world.front_default} />
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>
            <strong>Tipo(s)</strong>: {data.types.map(type => type.type.name).join(', ')}
            / /<strong>Altura</strong>: {data.height} in
            / /<strong>Peso</strong>: {data.weight} lb
            / /<strong>Status</strong>: {data.stats.map(stat => (<span key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}, </span>))} ...
          </ListGroup.Item>
          <ListGroup.Item><strong>Habilidades</strong>: {data.abilities.map(ability => ability.ability.name).join(', ')} in</ListGroup.Item>
          <ListGroup.Item><strong>Ataques</strong>: {data.moves.map(move => move.move.name).join(', ')}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant='dark' onClick={newSearch}>Buscar otro </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default Pokemon
