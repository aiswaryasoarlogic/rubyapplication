import * as React from 'react';
import { withRouter } from 'react-router';
import { styled, useTheme } from '@mui/material/styles';
import axios from 'axios';
import Box from '@mui/material/Box';
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Navbar from "./Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

// export default function MiniDrawer() {
  const ViewPage = (props) => {

  React.useEffect(() => {

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers= {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }

    axios.get(`http://localhost:3000/api/v1/show`, {headers})
    .then(res => {
      setPageData(res.data)
       
        console.log("Logged In res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
    })
  }, [])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pagedata, setPageData] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

//   const getPages = () => {
//     const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
// const headers= {
//     'Content-Type': 'application/json',
//     'X-CSRF-Token': csrf
//   }
// // const data = {
// //     "login": {
// //         "email": email,
// //         "password": password
// //     }
// // }
// // const id = sessionStorage.getItem("userid")
//     axios.get(`http://localhost:3000/api/v1/show`, {headers})
//     .then(res => {
//       setPageData(res.data)
//         // if(res.data.loggedIn){
//         //   sessionStorage.setItem("userid", res.data.userId)
//         //     props.history.push("/dashboard")
//         // }
//         console.log("Logged In res: ", res)
//     })
//     .catch(err => {
//         console.log("Error in login: ", err)
//     })
// }

  ///////////////////////////////////////////////////////////////////////////////////////

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const handleview = (id) => {
    localStorage.setItem("pageid", id);
    props.history.push("/displaypage")
  }

  const deletehandler = (pageid) => {
    // const pageid = localStorage.getItem('pageid');
    if(window.confirm("Are you sure you want to delete this page? ")){
      console.log("Pageid: ", pageid)
    
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const headers= {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    }
    const data = {
      "page": "test"
  }
  console.log("data: ",data)
    axios.post(`http://localhost:3000/api/v1/deletepage?pageid=${pageid}`, data, {headers})
    .then(res => {
        // if(res.data.loggedIn){
        //     props.history.push("/dashboard")
        // }
        props.history.push("/viewpage")
        window.location.reload();
        console.log("delete page res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
    })
  }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline />
      <AppBar position="fixed" open={open}>
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
          <Typography variant="h6" noWrap component="div">
            Content Management System View Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
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
        </List>
      </Drawer> */}
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">
            List of pages created
        </Typography>
        <Typography>
            <br/>
          </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">View Page</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pagedata.map(page => 
            <StyledTableRow >
              <StyledTableCell align="center" component="th" scope="row">
              <p style={{cursor: "pointer"}}>{page.title}</p>
              </StyledTableCell>
              <StyledTableCell align="center">
                {/* <a href="#">http://www.rubyapplication.com/search=q?{page.title}</a> */}
                <button onClick={() => {handleview(page.id)}}>{page.title}</button>
                </StyledTableCell>
              <StyledTableCell align = "center">
              <Button variant="outlined" onClick={() => {deletehandler(page.id)}} startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </StyledTableCell>
              </StyledTableRow>

          )}
        {/* <StyledTableRow >
              <StyledTableCell align="center" component="th" scope="row">
              All about Environment
              </StyledTableCell>
              <StyledTableCell align="center"><a href="#">http://www.rubyapplication.com/search=q?tree</a></StyledTableCell>
              <StyledTableCell align = "center">
              <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align="center" component="th" scope="row">
                School Education
              </StyledTableCell>
              <StyledTableCell align="center"><a href="#">http://www.rubyapplication.com/search=q?education</a></StyledTableCell>
              <StyledTableCell align = "center">
              <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align = "center" component="th" scope="row">
                Kids Entertainment
              </StyledTableCell>
              <StyledTableCell align="center"><a href="#">http://www.rubyapplication.com/search=q?kids</a></StyledTableCell>
              <StyledTableCell align = "center">
              <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align="center" component="th" scope="row">
                UI Development
              </StyledTableCell>
              <StyledTableCell align="center"><a href="#">http://www.rubyapplication.com/search=q?frontend</a></StyledTableCell>
              <StyledTableCell align = "center">
              <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
              </StyledTableCell>
            </StyledTableRow> */}






            
            {/* <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                Trignometry, Exponents, Equations
              </StyledTableCell>
              <StyledTableCell align="left">Mathematics class IX</StyledTableCell>
              <StyledTableCell align="left"><a href="#">http://www.rubyapplication.com/search=q?mathematics</a></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                bitcoins, etherium, web3
              </StyledTableCell>
              <StyledTableCell align="left">Blockchain Technologies</StyledTableCell>
              <StyledTableCell align="left"><a href="#">http://www.rubyapplication.com/search=q?bitcoin</a></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                apple, mango, orange
              </StyledTableCell>
              <StyledTableCell align="left">Healthy Fruits</StyledTableCell>
              <StyledTableCell align="left"><a href="#">http://www.rubyapplication.com/search=q?fruits</a></StyledTableCell>
            </StyledTableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <button onClick={() => {getPages()}}>Get data</button> */}
      </Box>
    </Box>
  );
}

export default withRouter(ViewPage);

