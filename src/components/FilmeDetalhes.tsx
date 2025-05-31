import { useParams, useNavigate } from 'react-router-dom';
import { filmes } from '../data/filmesMock';
import style from './filme.module.css';

const FilmeDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const filme = filmes.find((f) => f.id === Number(id));

  if (!filme) return <p>Filme não encontrado.</p>;

  return (
    <div className={style.container}>
      <img src={filme.imagem} alt={filme.titulo} width={500} height={500}/>
      <h1>{filme.titulo}</h1>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Idade:</strong> {filme.idade}</p>
      <p><strong>Sinopse:</strong> {filme.sinopse}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default FilmeDetalhes;
