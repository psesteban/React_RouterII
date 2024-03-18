import { useContext } from 'react'
import { PokemonContext } from '../context/ApiContext'
import { Button, Container, Card, ListGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pokemon = () => {
  const { data, loading } = useContext(PokemonContext)
  const navigate = useNavigate()
  const { id } = useParams()
  if (loading) return <p>Cargando...</p>
  const newSearch = () => {
    navigate('/pokemones')
  }

  return (
    <Container className='text-center m-4'>
      <h1>{id}</h1>
      <Card className='w-50 m-4'>
        <Card.Img variant='top' src={data.sprites.front_default} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item><strong>Tipo(s)</strong>: {data.types.map(type => type.type.name).join(', ')}</ListGroup.Item>
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
