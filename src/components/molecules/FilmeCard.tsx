import Button from '../atoms/Button';
import Titulo from '../atoms/Titulo';
import ImageFilme from '../atoms/img';
import Styles from './molecules.module.css';

type FilmeCardProps = {
  id: number;
  name: string;
  price: number;
  buttonText: string;
  buttonVariant: 'primary' | 'secundary';
  iconSize: 'sm' | 'md' | 'lg';
  sx?: object;
  light: 'sun' | 'shade';
  
};

function FilmeCard(props: FilmeCardProps) {
  return (
      <div className={Styles.cartas}>
        <ImageFilme size={props.iconSize} src={`https://image.tmdb.org/t/p/w500/${props.id}`} alt={props.name} />
        <Titulo text={props.name} />
        <p> Preço: R$ {props.price}</p>
        <Button variant={props.buttonVariant} text={props.buttonText} />
    
    </div>
  );
}

export default FilmeCard;