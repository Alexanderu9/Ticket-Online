import { Routes, Route } from 'react-router-dom';
import Filmes from './pages/Filmes';
import DetalhesFilme from './components/FilmeDetalhes';
import Home from './pages/Home';
import NavBarMain from './components/NavBarMain';
import FilmeGrid from './components/FilmeGrid';
import FilmeDetalhes from './components/FilmeDetalhes';
import ContatoForm from './pages/ContatoForm';
import Footer from './components/Footer';
import NavBar from './components/Navbar';




function App() {


  return (
   <>
    <NavBarMain/>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/FilmeGrid" element={<FilmeGrid />} />
    <Route path='/home' element={<Home/>}/>
    <Route path="/filmes/:id" element={<FilmeDetalhes />} />
    <Route path="/filmes" element={<Filmes />} />
    <Route path="/filmes/:id" element={<DetalhesFilme />} />
    <Route path="/contato" element={<ContatoForm />} />
    </Routes>
    <NavBar/>
    <Footer/>
    </>

);
}

export default App
