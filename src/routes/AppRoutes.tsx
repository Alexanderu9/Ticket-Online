import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Filmes from '../pages/Filmes';
import Contato from '../pages/Contato';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}