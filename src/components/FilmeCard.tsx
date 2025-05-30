import type { Filme } from '../data/filmesMock';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

type Props = {
  filme: Filme;
};

const FilmeCard = ({ filme }: Props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 280, margin: 2 }}>
      <CardMedia
        component="img"
        height="300"
        image={filme.imagem}
        alt={filme.titulo}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {filme.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gênero: {filme.genero}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Idade: {filme.idade}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate(`/filmes/${filme.id}`)} 
          sx={{ mt: 1 }}
        >
          Ver mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default FilmeCard;