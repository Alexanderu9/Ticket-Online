import { useParams, useNavigate } from 'react-router-dom';
import { filmes } from '../data/filmesMock';

const FilmeDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const filme = filmes.find((f) => f.id === Number(id));

  if (!filme) return <p>Filme não encontrado.</p>;

  return (
    <div>
      <img src={filme.imagem} alt={filme.titulo} />
      <h1>{filme.titulo}</h1>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Idade:</strong> {filme.idade}</p>
      <p><strong>Sinopse:</strong> {filme.sinopse}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default FilmeDetalhes;
