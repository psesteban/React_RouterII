import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbarpoke from './components/Navbar'
import PokemonProvider from './context/ApiContext'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'
import Home from './views/Home'
import NotFound from './views/Notfound'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <Navbarpoke />

          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/pokemones'
              element={<Pokemones />}
            />
            <Route
              path='/pokemon/:id'
              element={<Pokemon />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>

    </>
  )
}
export default App
