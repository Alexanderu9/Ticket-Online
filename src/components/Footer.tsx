import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.content}>
            <p>© 2025 Alexander Urdaneta. Todos os direitos reservados.</p>
            </div>
            <div className='social'>
            <FacebookIcon fontSize="large" color="primary" />
            <TwitterIcon fontSize="large" color="primary" />
            <InstagramIcon fontSize="large" color="primary" />
            </div>
            </div>
        </footer>
    );
}