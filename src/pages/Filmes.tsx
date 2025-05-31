import FilmeGrid from '../components/FilmeGrid';
import style from './Home.module.css';
const Filmes = () => {
  return (
    <div>
      <h1 className={style.filmes}>Filmes em Cartaz</h1>
      <FilmeGrid />
    </div>
  );
};

export default Filmes;