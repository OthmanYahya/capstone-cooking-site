import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BasicAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }} >
          <Button size="large" aria-label="About" color="inherit">
            <Typography sx={{ marginLeft: '0.25rem', fontWeight: 'bold' }}>About</Typography>
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to={'/contact'} style={{ textDecoration: 'none', color: 'white' }}>
          <Button size="large" aria-label="Contact Us" color="inherit">
            <Typography sx={{ marginLeft: '0.25rem', fontWeight: 'bold' }}>Contact Us</Typography>
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Button size="large" aria-label="Tasty Recipes" color="inherit">
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: { sm: 'block', color: 'white', fontWeight: 'bold' } }}
              >
                Tasty Recipes
              </Typography>
            </Link>
          </Button>
          <Box sx={{ flexGrow: 1 }} />


          {/* FULL SCREEN NAVBAR */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }} >
              <Button size="large" aria-label="About" color="inherit">
                <Typography sx={{ marginLeft: '0.25rem', fontWeight: 'bold' }}>About</Typography>
              </Button>
            </Link>
            <Link to={'/contact'} style={{ textDecoration: 'none', color: 'white' }}>
              <Button size="large" aria-label="Contact Us" color="inherit">
                <Typography sx={{ marginLeft: '0.25rem', fontWeight: 'bold' }}>Contact Us</Typography>
              </Button>
            </Link>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
