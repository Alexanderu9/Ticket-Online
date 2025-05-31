import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import  ThemeToggle  from './ThemeToggle';

const NavBarMain = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const menuItems = [
    { text: 'Início', path: '/home' },
    { text: 'Filmes', path: '/filmes' },
    { text: 'Contato', path: '/contato' }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <ThemeToggle />
          <Typography variant="h6" sx={{ ml: 2 }}>
            <h3>🎬 Ticket Online </h3>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => { navigate(item.path); setOpen(false); }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBarMain;
