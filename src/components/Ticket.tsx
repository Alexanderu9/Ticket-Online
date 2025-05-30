import { useMediaQuery } from '@mui/material';
import FilmeCard from './molecules/FilmeCard';
interface filmes {
  id: number;
  name: string;
  price: number;
}

interface FilmeGridProps {
  filmes: filmes[];
}

function FilmeGrid({ filmes }: FilmeGridProps) {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1023px)');

  const columns = isDesktop ? 3 : isTablet ? 2 : 1;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {filmes.map((filme) => (
        <FilmeCard
          key={filme.id}
          id={filme.id}
          name={filme.name}
          price={filme.price}
          buttonText="Comprar"
          buttonVariant="primary"
          iconSize="md"
          light="shade"
        />
      ))}
    </div>
  );
}

export default FilmeGrid;