import * as React from 'react';
import { withRouter } from 'react-router';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import axios from "axios";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import ViewListIcon from '@mui/icons-material/ViewList';


import AccountCircle from '@mui/icons-material/AccountCircle';

import './styles/displaypage.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    background: '#2E3B55',
    color: "white",
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    color: "white",
    background: '#2E3B55',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    color: "white",
    background: '#2E3B55',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    background: '#2E3B55',
    color: "white",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const AdminNavbar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
      {/* <MenuItem onClick={() => handleprofile()}>Profile</MenuItem> */}
      <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
    </Menu>
  );


  const handlePath = (path) => {
    props.history.replace(`/${path}`)
  }


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleprofile = () => {
    setAnchorEl(null);
    props.history.push("/profile")
  }

  const handleLogout=()=>{
//     const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
// const headers2= {
//     'Content-Type': 'application/json',
//     'X-CSRF-Token': csrf
//     }
//     axios.get("http://localhost:3000/logout", {headers2})
//     .then(res => {
//         console.log("logout res: ", res)
        sessionStorage.clear();
        localStorage.clear();
        props.history.push("/adminlogin")
    //     setAnchorEl(null);
    // })
    // .catch(err => {
    //     console.log("logout error: ", err)
    // })
}

  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ background: '#2E3B55' }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" variant="h6" sx={{ flexGrow: 1 }} component="div">
           Admin Panel
          </Typography>
          {/* <Button color="inherit" onClick={()=>{handleLogout()}}>Logout</Button> */}
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer style={{ background: '#2E3B55' }} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
        <ListItem button onClick = {() => handlePath('admindashboard')} >
            <ListItemIcon>
              <DashboardIcon style={{color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItem>
          <ListItem button onClick = {() => handlePath('userslist')} >
            <ListItemIcon>
              <ViewListIcon style={{color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Users List" />
          </ListItem>
          {/* <ListItem button onClick = {() => handlePath('seopage')} >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="SEO Page" />
          </ListItem>
          <ListItem button onClick = {() => handlePath('createpage')} >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Create Page" />
          </ListItem> */}
          
        </List>
        
      </Drawer>
      </React.Fragment>

  );
}

export default withRouter(AdminNavbar)