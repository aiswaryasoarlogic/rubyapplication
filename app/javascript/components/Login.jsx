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
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
          const handlePassword = (e) => {
              setPassword(e.currentTarget.value)
              setEmptyPassword(false);
          }
    
          const handleEmail = (e) => {
            setEmail(e.currentTarget.value)
            setEmptyEmail(false);
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
    if(email == "" ){
      setEmptyEmail(true)
    }
    else if(password == ""){
      setEmptyPassword(true)
    }
    else{
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
                else{
                  alert("invalid credentials!!")
                }
                console.log("Logged In res: ", res)
            })
            .catch(err => {
                console.log("Error in login: ", err)
            })
          }
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
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange = {(e) => { handleEmail(e)}}
                />
                {emptyEmail && <span style={{color: "red"}}>Pleasr enter email</span>}
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
                {emptyPassword && <span style={{color: "red"}}>Please enter password</span>}
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
                <Link href="/registration" variant="body2">
                  Don't have an account? Sign Up
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