import { Container, Image } from 'react-bootstrap'
import Bienvenida from '../assets/favoritegiff.gif'

const Home = () => {
  return (
    <Container className='text-center m-4'>
      <h1>Bienvenido maestro PoKeMon</h1>
      <Image src={Bienvenida} />
    </Container>
  )
}
export default Home
