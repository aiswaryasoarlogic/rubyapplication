// import React from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router';

// const Dashboard = (props) => {

//     // const handleLogout=()=>{
//     //     const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     // const headers= {
//     //     'Content-Type': 'application/json',
//     //     'X-CSRF-Token': csrf
//     //   }
//     //   const data = {
//     //       'authenticity_token': csrf
//     //   }
//     //     axios.delete("http://localhost:3000/users/sign_out",data, {headers})
//     //     .then(res => {
//     //         console.log("logout res: ", res)
//     //     })
//     //     .catch(err => {
//     //         console.log("logout error: ", err)
//     //     })
//     // }

//     const handleLogout=()=>{
//         const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     const headers2= {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': csrf
//       }
//     //   const data2 = {
//     //       'authenticity_token': csrf2
//     //   }
//         axios.get("http://localhost:3000/logout", {headers2})
//         .then(res => {
//             console.log("logout res: ", res)
//             props.history.push("/login")
//         })
//         .catch(err => {
//             console.log("logout error: ", err)
//         })
//     }

//     return(
//         <div>
//             <h1>This is a Dashboard page</h1>
//             <button onClick={() => {handleLogout()}}>Logout</button>
//         </div>
//     )
// }

// export default Dashboard;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  original

// import * as React from 'react';
// import axios from 'axios';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// // import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { withRouter } from 'react-router';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// const Dashboard = (props) => {

//     const handleLogout=()=>{
//                 const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//             const headers2= {
//                 'Content-Type': 'application/json',
//                 'X-CSRF-Token': csrf
//               }
//             //   const data2 = {
//             //       'authenticity_token': csrf2
//             //   }
//                 axios.get("http://localhost:3000/logout", {headers2})
//                 .then(res => {
//                     console.log("logout res: ", res)
//                     props.history.push("/login")
//                 })
//                 .catch(err => {
//                     console.log("logout error: ", err)
//                 })
//             }
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Album layout
//           </Typography>
//           <Typography variant="h6" color="inherit" noWrap>
//           <button onClick={() => {handleLogout()}}>Logout</button>
//           </Typography>
          
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//              Welcom to Dashboard
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained">Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
// }

// export default withRouter(Dashboard);




// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@mui/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Navbar from "./Navbar";
// import "./styles/createpage.css"

// const styles = theme => ({
//   root: {
//     display: "flex"
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     marginTop: theme.spacing.unit,
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3
//   }
// });

// class CreatePage extends React.Component {
  
//   render() {
//     const { classes, theme } = this.props;
//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <Navbar />
       
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
          
// <div className="card">
//   <div className="container"><br/>
//           <div>
//             <h2 id="heading">Create Page</h2>
//           </div>

// {/* <div id="formdiv"> */}
// <form action="">
//     <label for="fname">Title</label>
//     <input type="text" id="fname" name="firstname" placeholder="Title.." />

//     <label for="lname">Page Title</label>
//     <input type="text" id="lname" name="lastname" placeholder="Page Title.." />

//     <label for="lname">Keywords</label>
//     <input type="text" id="lname" name="lastname" placeholder="Keywords." />

//     <label for="lname">Meta Description</label>
//     <input type="text" id="lname" name="lastname" placeholder="Meta Description.." />

//     <label for="lname">Description</label>
//     <input type="text" id="lname" name="lastname" placeholder="Description.." />

//     <label for="lname">Upload Image</label>
//     <input type="file" id="lname" name="lastname" />

//       <br /><br/>
//     {/* <label for="country">Keywords</label>
//     <select id="country" name="country">
//       <option value="australia">Australia</option>
//       <option value="canada">Canada</option>
//       <option value="usa">USA</option>
//     </select> */}
  
//     <input type="submit" value="Submit" />
//   </form>
//   </div>
//   </div>

//         </main>
//       </div>
//     );
//   }
// }

// CreatePage.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(CreatePage);


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
import Navbar from "./Navbar";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout=()=>{
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers2= {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
        }
    //   const data2 = {
    //       'authenticity_token': csrf2
    //   }
        axios.get("http://localhost:3000/logout", {headers2})
        .then(res => {
            console.log("logout res: ", res)
            sessionStorage.clear();
            props.history.push("/login")
        })
        .catch(err => {
            console.log("logout error: ", err)
        })
    }

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
      {/* <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            Welcome to dashboard
          </Typography><Button color="inherit" onClick={()=>{handleLogout()}}>Logout</Button>

        </Toolbar>
      </AppBar> */}
      {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box> */}
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <h1>Dashboard</h1>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(Dashboard);






