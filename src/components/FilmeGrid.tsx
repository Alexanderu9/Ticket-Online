import FilmeCard from './FilmeCard';
import { filmes } from '../data/filmesMock';
import { Box } from '@mui/material';

const FilmeGrid = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      padding={3}
    >
      {filmes.map(filme => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </Box>
  );
};

export default FilmeGrid;