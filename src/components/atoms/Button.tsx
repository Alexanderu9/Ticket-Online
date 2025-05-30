import styles from './atoms.module.css'
type ButtonProps = {
    variant: 'primary' | 'secundary';
    text: string;
  };
  
  function Button({ variant, text }: ButtonProps) {
    return(
     <button className={styles[variant]}>
    {text}
    </button>
    )
  }
  
  export default Button;