import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbarpoke () {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        {' - '}
        <NavLink className={setActiveClass} to='/pokemones'>
          Pokemones
        </NavLink>
      </Navbar>
    </>
  )
}
