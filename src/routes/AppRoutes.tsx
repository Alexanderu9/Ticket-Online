import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Filmes from '../pages/Filmes';
import ContatoForm from '../pages/ContatoForm';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/contato" element={<ContatoForm />} />
    </Routes>
  );
}