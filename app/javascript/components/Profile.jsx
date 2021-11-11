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
// import "./styles/profile.css";
const drawerWidth = 240;

function Profile(props) {
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
        <div className="main-container">

    <header className="block">
        <ul className="header-menu horizontal-list">
            <li>
                <a className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Settings</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#2"><span className="icon fontawesome-user scnd-font-color"></span>Account</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                <a className="header-menu-number" href="#4">5</a>
            </li>
            <li>
                <a className="header-menu-tab" href="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
            </li>
        </ul>
        <div className="profile-menu">
            <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
            <div className="profile-picture small-profile-picture">
                <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
            </div>
        </div>
    </header>

    <div className="left-container container">
        <div className="menu-box block"> 
            <h2 className="titular">MENU BOX</h2>
            <ul className="menu-box-menu">
                <li>
                    <a className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></a>                            
                </li>
                <li>
                    <a className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></a>                            
                </li>
                <li>
                    <a className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></a>                            
                </li>
                <li>
                    <a className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                </li>
                <li>
                    <a className="menu-box-tab" href="#13"><sapn className="icon entypo-chart-line scnd-font-color"></sapn>Statistics</a>
                </li>                        
            </ul>
        </div>
        <div className="donut-chart-block block"> 
            <h2 className="titular">OS AUDIENCE STATS</h2>
            <div className="donut-chart">
                <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
                <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
                <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
                <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>
                   
                <p className="center-date">JUNE<br/><span className="scnd-font-color">2013</span></p> 
            </div>
            <ul className="os-percentages horizontal-list">
                <li>
                    <p className="ios os scnd-font-color">iOS</p>
                    <p className="os-percentage">21<sup>%</sup></p>
                </li>
                <li>
                    <p className="mac os scnd-font-color">Mac</p>
                    <p className="os-percentage">48<sup>%</sup></p>
                </li>
                <li>
                    <p className="linux os scnd-font-color">Linux</p>
                    <p className="os-percentage">9<sup>%</sup></p>
                </li>
                <li>
                    <p className="win os scnd-font-color">Win</p>
                    <p className="os-percentage">32<sup>%</sup></p>
                </li>
            </ul>
        </div>
        <div className="line-chart-block block clear"> 
            <div className="line-chart">
             
                <div className='grafico'>
                   <ul className='eje-y'>
                     <li data-ejeY='30'></li>
                     <li data-ejeY='20'></li>
                     <li data-ejeY='10'></li>
                     <li data-ejeY='0'></li>
                   </ul>
                   <ul className='eje-x'>
                     <li>Apr</li>
                     <li>May</li>
                     <li>Jun</li>
                   </ul>
                     <span data-valor='25'>
                       <span data-valor='8'>
                         <span data-valor='13'>
                           <span data-valor='5'>   
                             <span data-valor='23'>   
                             <span data-valor='12'>
                                 <span data-valor='15'>
                                 </span></span></span></span></span></span></span>
                </div>
            </div>
            <ul className="time-lenght horizontal-list">
                <li><a className="time-lenght-btn" href="#14">Week</a></li>
                <li><a className="time-lenght-btn" href="#15">Month</a></li>
                <li><a className="time-lenght-btn" href="#16">Year</a></li>
            </ul>
            <ul className="month-data clear">
                <li>
                    <p>APR<span className="scnd-font-color"> 2013</span></p>
                    <p><span className="entypo-plus increment"> </span>21<sup>%</sup></p>
                </li>
                <li>
                    <p>MAY<span className="scnd-font-color"> 2013</span></p>
                    <p><span className="entypo-plus increment"> </span>48<sup>%</sup></p>
                </li>
                <li>
                    <p>JUN<span className="scnd-font-color"> 2013</span></p>
                    <p><span className="entypo-plus increment"> </span>35<sup>%</sup></p>
                </li>
            </ul>
        </div>
        <div className="media block">
            <div id="media-display">
                <a className="media-btn play" href="#23"><span className="fontawesome-play"></span></a>
            </div>
            <div className="media-control-bar">
                <a className="media-btn play" href="#23"><span className="fontawesome-play scnd-font-color"></span></a>
                <p className="time-passed">4:15 <span className="time-duration scnd-font-color">/ 9:23</span></p>
                <a className="media-btn volume" href="#24"><span className="fontawesome-volume-up scnd-font-color"></span></a>
                <a className="media-btn resize" href="#25"><span className="fontawesome-resize-full scnd-font-color"></span></a>
            </div>
        </div>
        <ul className="social horizontal-list block"> 
            <li className="facebook"><p className="icon"><span className="zocial-facebook"></span></p><p className="number">248k</p></li>
            <li className="twitter"><p className="icon"><span className="zocial-twitter"></span></p><p className="number">30k</p></li>
            <li className="googleplus"><p className="icon"><span className="zocial-googleplus"></span></p><p className="number">124k</p></li>
            <li className="mailbox"><p className="icon"><span className="fontawesome-envelope"></span></p><p className="number">89k</p></li>
        </ul>
    </div>

    <div className="middle-container container">
        <div className="profile block">
            <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>
            <div className="profile-picture big-profile-picture clear">
                <img width="150px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
            </div>
            <h1 className="user-name">Anne Hathaway</h1>
            <div className="profile-description">
                <p className="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
            </div>
            <ul className="profile-options horizontal-list">
                <li><a className="comments" href="#40"><p><span className="icon fontawesome-comment-alt scnd-font-color"></span>23</p></a></li>
                <li><a className="views" href="#41"><p><span className="icon fontawesome-eye-open scnd-font-color"></span>841</p></a></li>
                <li><a className="likes" href="#42"><p><span className="icon fontawesome-heart-empty scnd-font-color"></span>49</p></a></li>
            </ul>
        </div>
        <div className="weather block clear"> 
            <h2 className="titular"><span className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>
            <div className="current-day">
                <p className="current-day-date">FRI 29/06</p>
                <p className="current-day-temperature">24º<span className="icon-cloudy"></span></p>
            </div>
            <ul className="next-days">
                <li>
                    <a href="#43">
                        <p className="next-days-date"><span className="day">SAT</span> <span className="scnd-font-color">29/06</span></p>
                        <p className="next-days-temperature">25º<span className="icon icon-cloudy scnd-font-color"></span></p>
                    </a>
                </li>
                <li>
                    <a href="#44">
                        <p className="next-days-date"><span className="day">SUN</span> <span className="scnd-font-color">30/06</span></p>
                        <p className="next-days-temperature">22º<span className="icon icon-cloudy2 scnd-font-color"></span></p>
                    </a>
                </li>
                <li>
                    <a href="#45">
                        <p className="next-days-date"><span className="day">MON</span> <span className="scnd-font-color">01/07</span></p>
                        <p className="next-days-temperature">24º<span className="icon icon-cloudy2 scnd-font-color"></span></p>
                    </a>
                </li>
                <li>
                    <a href="#46">
                        <p className="next-days-date"><span className="day">TUE</span> <span className="scnd-font-color">02/07</span></p>
                        <p className="next-days-temperature">26º<span className="icon icon-cloudy scnd-font-color"></span></p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p className="next-days-date"><span className="day">WED</span> <span className="scnd-font-color">03/07</span></p>
                        <p className="next-days-temperature">27º<span className="icon icon-sun scnd-font-color"></span></p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p className="next-days-date"><span className="day">THU</span> <span className="scnd-font-color">04/07</span></p>
                        <p className="next-days-temperature">29º<span className="icon icon-sun scnd-font-color"></span></p>
                    </a>
                </li>
            </ul>
        </div>
        <div className="tweets block"> 
            <h2 className="titular"><span className="icon zocial-twitter"></span>LATEST TWEETS</h2>
            <div className="tweet first">
                <p>Ice-cream trucks only play music when out of ice-cream. Well played dad. On <a className="tweet-link" href="#17">@Quora</a></p>
                <p><a className="time-ago scnd-font-color" href="#18">3 minutes ago</a></p>
            </div>
            <div className="tweet">
                <p>We are in the process of pushing out all of the new CC apps! We will tweet again once they are live <a className="tweet-link" href="#19">#CreativeCloud</a></p>
                <p><a className="scnd-font-color" href="#20">6 hours ago</a></p>
            </div>
        </div> 
        <ul className="social block"> 
        
            <li><a href="#50"><div className="facebook icon"><span className="zocial-facebook"></span></div><h2 className="facebook titular">SHARE TO FACEBOOK</h2></a></li>
            <li><a href="#51"><div className="twitter icon"><span className="zocial-twitter"></span></div><h2 className="twitter titular">SHARE TO TWITTER</h2></a></li>
            <li><a href="#52"><div className="googleplus icon"><span className="zocial-googleplus"></span></div><h2 className="googleplus titular">SHARE TO GOOGLE+</h2></a></li>
        </ul>
    </div>

    <div className="right-container container">
        <div className="join-newsletter block"> 
            <h2 className="titular">JOIN THE NEWSLETTER</h2>
            <div className="input-container">
                <input type="text" placeholder="yourname@gmail.com" className="email text-input" />
                <div className="input-icon envelope-icon-newsletter"><span className="fontawesome-envelope scnd-font-color"></span></div>
            </div>
            <a className="subscribe button" href="#21">SUBSCRIBE</a>
        </div>
        <div className="account block"> 
            <h2 className="titular">SIGN IN TO YOUR ACCOUNT</h2>
            <div className="input-container">
                <input type="text" placeholder="yourname@gmail.com" className="email text-input" />
                <div className="input-icon envelope-icon-acount"><span className="fontawesome-envelope scnd-font-color"></span></div>
            </div>
            <div className="input-container">
                <input type="text" placeholder="Password" className="password text-input" />
                <div className="input-icon password-icon"><span className="fontawesome-lock scnd-font-color"></span></div>
            </div>
            <a className="sign-in button" href="#22">SIGN IN</a>
            <p className="scnd-font-color">Forgot Password?</p>
            <a className="fb-sign-in" href="58">
                <p><span className="fb-border"><span className="icon zocial-facebook"></span></span>Sign in with Facebook</p>
            </a>
        </div>
        <div className="loading block"> 
            <div className="progress-bar downloading"></div>
            <p><span className="icon fontawesome-cloud-download scnd-font-color"></span>Downloading...</p>
            <p className="percentage">81<sup>%</sup></p>
            <div className="progress-bar uploading"></div>
            <p><span className="icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...</p>
            <p className="percentage">43<sup>%</sup></p>
        </div>
        <div className="calendar-day block"> 
            <div className="arrow-btn-container">
                <a className="arrow-btn left" href="#200"><span className="icon fontawesome-angle-left"></span></a>
                <h2 className="titular">WEDNESDAY</h2>
                <a className="arrow-btn right" href="#201"><span className="icon fontawesome-angle-right"></span></a>
            </div>
                <p className="the-day">26</p>
                <a className="add-event button" href="#27">ADD EVENT</a>
        </div>
        <div className="calendar-month block"> 
            <div className="arrow-btn-container">
                <a className="arrow-btn left" href="#202"><span className="icon fontawesome-angle-left"></span></a>
                <h2 className="titular">APRIL 2013</h2>
                <a className="arrow-btn right" href="#203"><span className="icon fontawesome-angle-right"></span></a>
            </div>
            <table className="calendar">
                <thead className="days-week">
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>R</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a className="scnd-font-color" href="#100">1</a></td>
                    </tr>
                    <tr>
                        <td><a className="scnd-font-color" href="#101">2</a></td>
                        <td><a className="scnd-font-color" href="#102">3</a></td>
                        <td><a className="scnd-font-color" href="#103">4</a></td>
                        <td><a className="scnd-font-color" href="#104">5</a></td>
                        <td><a className="scnd-font-color" href="#105">6</a></td>
                        <td><a className="scnd-font-color" href="#106">7</a></td>
                        <td><a className="scnd-font-color" href="#107">8</a></td>
                    </tr>
                    <tr>
                        <td><a className="scnd-font-color" href="#108">9</a></td>
                        <td><a className="scnd-font-color" href="#109">10</a></td>
                        <td><a className="scnd-font-color" href="#110">11</a></td>
                        <td><a className="scnd-font-color" href="#111">12</a></td>
                        <td><a className="scnd-font-color" href="#112">13</a></td>
                        <td><a className="scnd-font-color" href="#113">14</a></td>
                        <td><a className="scnd-font-color" href="#114">15</a></td>
                    </tr>
                    <tr>
                        <td><a className="scnd-font-color" href="#115">16</a></td>
                        <td><a className="scnd-font-color" href="#116">17</a></td>
                        <td><a className="scnd-font-color" href="#117">18</a></td>
                        <td><a className="scnd-font-color" href="#118">19</a></td>
                        <td><a className="scnd-font-color" href="#119">20</a></td>
                        <td><a className="scnd-font-color" href="#120">21</a></td>
                        <td><a className="scnd-font-color" href="#121">22</a></td>
                    </tr>
                    <tr>
                        <td><a className="scnd-font-color" href="#122">23</a></td>
                        <td><a className="scnd-font-color" href="#123">24</a></td>
                        <td><a className="scnd-font-color" href="#124">25</a></td>
                        <td><a className="today" href="#125">26</a></td>
                        <td><a href="#126">27</a></td>
                        <td><a href="#127">28</a></td>
                        <td><a href="#128">29</a></td>
                    </tr>
                    <tr>
                        <td><a href="#129">30</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div> 
</div> 
        {/* <h1>Dashboard</h1> */}
        {/* <Typography paragraph>
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
        </Typography> */}
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(Profile);





