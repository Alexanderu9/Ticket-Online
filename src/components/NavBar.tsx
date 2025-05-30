import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const Inicio = () => {
        navigate('/Inicio');
    };

    const Filmes = () => {
        navigate('/Filmes');
    };

    const DetalhesFilmes = () => {
        navigate('/DetalhesFilmes');
    };

    const Contato = () => {
        navigate('/Contato');
    };

    return (
        <nav className={styles.navBar}>
            <button onClick={Inicio}>Inicio</button>
            <button onClick={Filmes}>Filmes</button>
            <button onClick={DetalhesFilmes}>DetalhesFilmes</button>
            <button onClick={Contato}>Contato</button>
        </nav>
    );
}