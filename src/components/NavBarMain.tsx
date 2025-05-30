import { AppBar, Toolbar,  Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          CinemaApp
        </Typography>

        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>Início</Button>
          <Button color="inherit" onClick={() => navigate('/filmes')}>Filmes</Button>
          <Button color="inherit" onClick={() => navigate('/contato')}>Contato</Button>
        </Box>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;