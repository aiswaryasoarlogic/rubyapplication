
import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withRouter } from 'react-router';
import AdminNavbar from "./AdminNavbar";

const drawerWidth = 240;

function AdminDashboard(props) {

  React.useEffect(() => {
    if(!sessionStorage.getItem('adminlogged')){
      alert("Please login again!!")
      props.history.push("/adminlogin")
    }
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="View Page" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="SEO Page" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Create Page" />
          </ListItem>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    
      <AdminNavbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <h1>This is Admin Dashboard</h1>
        
      </Box>
    </Box>
  );
}

AdminDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(AdminDashboard);






