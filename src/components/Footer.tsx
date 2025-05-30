import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.content}>
            <p>© 2025 PlantStore. Todos os direitos reservados.</p>
            </div>
            <div className='social'>
                <img src="./src/assets/Logo.png" alt="Facebook" />
                <img src="./src/assets/Logo.png" alt="Twitter" />
                <img src="./src/assets/Logo.png" alt="Instagram" />
            </div>
            </div>
        </footer>
    );
}