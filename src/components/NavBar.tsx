import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: 3,
          }}
        >
          <Button color="inherit" onClick={() => navigate('/home')}>Início</Button>
          <Button color="inherit" onClick={() => navigate('/filmes')}>Filmes</Button>
          <Button color="inherit" onClick={() => navigate('/contato')}>Contato</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
