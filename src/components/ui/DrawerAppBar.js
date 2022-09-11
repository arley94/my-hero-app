import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link as LinkRouter } from 'react-router-dom';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
const navItems = [
  {
    text: 'Marvel',
    path: '/marvel'
  },
  {
    text: 'DC',
    path: '/dc'
  },
  {
    text: 'Search',
    path: '/search'
  },
  {
    text: 'Logout',
    path: '/login'
  }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: 1, display: 'flex', flexDirection: 'column' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
        {navItems.map((item) => (

          <ListItem sx={{ textAlign: 'center', '&:last-child': { mt: 'auto' } }} key={item.text} to={item.path} button component={LinkRouter} disablePadding>
            <ListItemText primary={item.text} />
          </ListItem>

        ))}
      </List>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Button component={LinkRouter} to={item.path} key={item.text} sx={{ color: '#fff', '&:last-child': { ml: 'auto' } }}>
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}


export default DrawerAppBar;
