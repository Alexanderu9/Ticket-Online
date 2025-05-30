import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import NavBarMain from './components/NavBarMain';




function App() {


  return (
   <>
    <NavBarMain/>
    <NavBar/>
    <Routes>
    <Route path="/" element={'<Inicio /'} />
    <Route path="/filmes" element={'<Filmes />'} />
    <Route path="/detalhesfilmes" element={'<DetalhesFilmes />'} />
    <Route path="/contato" element={'<Contato />'} />

    </Routes>

    </>

);
}

export default App
