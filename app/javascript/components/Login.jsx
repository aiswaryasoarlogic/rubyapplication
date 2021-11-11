// import React, {useState, useEffect} from 'react';
// import axios from "axios";
// import { withRouter } from 'react-router';
// import {
//     Button,
//     TextField,
//     Grid,
//     Paper,
//     AppBar,
//     Typography,
//     Toolbar,
//     Link,
//   } from "@mui/material";
//   import "./login.css"
  

// const Login = (props) => {

//     // useEffect(() => {
//     //     const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     //     setToken(csrf)
//     //     const headers= {
//     //         'Content-Type': 'application/json',
//     //         'X-CSRF-Token': csrf
//     //       }
//     //       console.log("check token: ", csrf)
//     //       const reqData = {
//     //           test: "value"
//     //       }
//     //     axios.post("http://localhost:3000/check", reqData, {headers})
//     //     .then(res => {
//     //         if(res.data.loggedIn){
//     //             setLogged(true)
//     //         }
//     //         console.log("Res: ", res)
//     //     })
//     //     .catch(err => {
//     //         console.log("Error: ", err)
//     //     })
//     //     // Update the document title using the browser API
        
//     //   }, []);

//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");

//       const handlePassword = (e) => {
//           setPassword(e.currentTarget.value)
//       }

//       const handleEmail = (e) => {
//         setEmail(e.currentTarget.value)
//     }

    

//     const handleLogin = () => {
//         const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     const headers= {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': csrf
//       }
//     const data = {
//         "login": {
//             "email": email,
//             "password": password
//         }
//     }
//         axios.post("http://localhost:3000/sessions", data, {headers})
//         .then(res => {
//             if(res.data.loggedIn){
//                 props.history.push("/dashboard")
//             }
//             console.log("Logged In res: ", res)
//         })
//         .catch(err => {
//             console.log("Error in login: ", err)
//         })
//     }

//     const handleLogout=()=>{
//         const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     const headers= {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': csrf
//       }
//       const data = {
//           'authenticity_token': csrf
//       }
//         axios.delete("http://localhost:3000/users/sign_out",data, {headers})
//         .then(res => {
//             console.log("logout res: ", res)
//         })
//         .catch(err => {
//             console.log("logout error: ", err)
//         })
//     }

//     return (
//         // <div>
//         //     <h1>Welcome to login page </h1>
            
//         //     <label for="email">Email:</label><br/>
//         //     <input type="text" onChange = {(e) => { handleEmail(e)}} id="email" name="email" placeholder="email"/><br/>
//         //     <label for="email">Password:</label><br/>
//         //     <input type="text" onChange={(e) => handlePassword(e)} id="password" name="password" placeholder="password"/><br/>
            

//         //     <button onClick = {() => {handleLogin()}}>Login</button>
//         // </div>

//         <div>
//       <AppBar position="static" alignitems="center" color="primary">
//         <Toolbar>
//           <Grid container justify="center" wrap="wrap">
//             <Grid item>
//               <Typography variant="h6">CMS APP</Typography>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>
//       <Grid container spacing={0} justify="center" direction="row">
//         <Grid item>
//           <Grid
//             container
//             direction="column"
//             justify="center"
//             spacing={2}
//             className="login-form"
//           >
//       <Paper
//         variant="elevation"
//         elevation={2}
//         className="login-background"
//       >
//         <Grid item>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//         </Grid>
//         <br/>
//         <Grid item>
//           <form onSubmit={this.handleSubmit}>
//             <Grid container direction="column" spacing={2}>
//             <Grid item>
//               <TextField
//                 type="email"
//                 placeholder="Email"
//                 fullWidth
//                 name="username"
//                 variant="outlined"
//                 value={this.state.username}
//                 onChange = {(e) => { handleEmail(e)}}
//                 required
//                 autoFocus
//               />
//   </Grid>
//   <Grid item>
//   <TextField
//   type="password"
//   placeholder="Password"
//   fullWidth
//   name="password"
//   variant="outlined"
//   value={this.state.password}
//   onChange={(e) => handlePassword(e)}
//   required
//   />
//   </Grid>
//   <Grid item>
//   <Button
//   variant="contained"
//   color="primary"
//   type="submit"
//   className="button-block"
//   onClick = {() => {handleLogin()}}
//   >
//   Submit
//   </Button>
//   </Grid>
//   </Grid>
//   </form>
//   </Grid>
//   <Grid item>
//   <Link href="#" variant="body2">
//   Forgot Password?
//   </Link>
//   </Grid>
//   </Paper>
//   </Grid>
//   </Grid>
//   </Grid>
//   </div>
//     )
// }

// export default withRouter(Login);

import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios";
import { withRouter } from 'react-router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        rubyapplication.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = (props) => {
    const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
    
          const handlePassword = (e) => {
              setPassword(e.currentTarget.value)
          }
    
          const handleEmail = (e) => {
            setEmail(e.currentTarget.value)
        }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleLogin = () => {
            const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        const headers= {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
          }
        const data = {
            "login": {
                "email": email,
                "password": password
            }
        }
            axios.post("http://localhost:3000/sessions", data, {headers})
            .then(res => {
                if(res.data.loggedIn){
                  sessionStorage.setItem("userid", res.data.userId)
                    props.history.replace("/dashboard")
                }
                console.log("Logged In res: ", res)
            })
            .catch(err => {
                console.log("Error in login: ", err)
            })
        }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
            {/* <p>locked icon</p> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange = {(e) => { handleEmail(e)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handlePassword(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {() => {handleLogin()}}
            >
             Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default withRouter(Login);