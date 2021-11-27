
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
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
     background: '#2E3B55',
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


const drawerWidth = 240;

function UsersList(props) {

//   React.useEffect(() => {
//     if(!sessionStorage.getItem('userid')){
//       alert("Please login again!!")
//       props.history.push("/login")
//     }
//   }, []);

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userslist, setUsersList] = React.useState([]);

  const handledelete = (userid) => {
    if(window.confirm("Are you sure you want to delete this user? ")){
      // console.log("Pageid: ", pageid)
    
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const headers= {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    }
    const data = {
      "page": "test"
  }
  console.log("data: ",data)
    axios.post(`http://localhost:3000/deleteuser?userid=${userid}`, data, {headers})
    .then(res => {
        // if(res.data.loggedIn){
        //     props.history.push("/dashboard")
        // }
        props.history.push("/userslist")
        window.location.reload();
        console.log("delete page res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
    })
  }
  }
  
  // const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    if(!sessionStorage.getItem('adminlogged')){
      alert("Please login again!!")
      props.history.push("/adminlogin")
    }
    else{
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers= {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
      const data = {
          "user": "user"
      }
    axios.post(`http://localhost:3000/users/listuser`,data, {headers})
    .then(res => {
        console.log("usersList: ", res)
        setUsersList(res.data)
        // setpagelist(res.data)
        
    })
    .catch(err => {
        console.log("Error: ", err)
    })
  }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
    
      <AdminNavbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <h3 style={{textAlign: "center"}}>Users List</h3>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{ background: '#2E3B55' }}>
          <TableRow>
          <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Profession</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userslist.map((user) => (
            <StyledTableRow key={user.id}>
              {/* <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell> */}
              <StyledTableCell align="center">{user.id}</StyledTableCell>
              <StyledTableCell align="center">{user.name}</StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.phone}</StyledTableCell>
              <StyledTableCell align="center">{user.profession}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">
              <Button variant="outlined" onClick = {() => handledelete(user.id)} startIcon={<DeleteIcon />}>
                Delete
                </Button>
                  {/* <button><EditIcon />Edit</button> */}
                  </StyledTableCell>
            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
        
      </Box>
    </Box>
  );
}

// UsersList.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   // window: PropTypes.func,
// };

export default withRouter(UsersList);