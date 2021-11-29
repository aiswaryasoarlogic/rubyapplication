// import React, {useState, useEffect} from 'react';
// import axios from "axios";
// import { withRouter } from 'react-router';

// const Registration = (props) => {

    
    
//     const initialValues = {
//         name: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//         phone: "",
//         profession: ""
//       };

//       const [logged, setLogged] = useState(false);
//       const [token, setToken] = useState("false");

//       const [values, setValues] = useState(initialValues);

//       useEffect(() => {
//         const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//         setToken(csrf)
//         const headers= {
//             'Content-Type': 'application/json',
//             'X-CSRF-Token': csrf
//           }
//           console.log("check token: ", csrf)
//           const reqData = {
//               test: "value"
//           }
//         axios.post("http://localhost:3000/check", reqData, {headers})
//         .then(res => {
//             if(res.data.loggedIn){
//                 setLogged(true)
//             }
//             console.log("Res: ", res)
//         })
//         .catch(err => {
//             console.log("Error: ", err)
//         })
//         // Update the document title using the browser API
        
//       }, []);

//       const handleInputChange = (e) => {
//         //const name = e.target.name 
//         //const value = e.target.value 
//         const { name, value } = e.target;
    
//         setValues({
//           ...values,
//           [name]: value,
//         });
//       };

    
   

//     const handleRegistration = () => {

//         // const csrf2 = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//     const headers= {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': token
//       }
//       console.log("Token: ", token)

//       const data1 = {
//         "user": {
//             "name": values.name,
//             "email": values.email,
//             "password": values.password,
//             "password_confirmation": values.password_confirmation,
//             "phone": values.phone,
//             "profession": values.profession
//         }
//     }


//         axios.post("http://localhost:3000/users", data1, {headers})
//         .then(res => {
//             if(res.data.registered){
//                 props.history.push("/login")
//             }
//             console.log("Logged In res: ", res)
//         })
//         .catch(err => {
//             console.log("Error in login: ", err)
//         })
//     }

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
//         })
//         .catch(err => {
//             console.log("logout error: ", err)
//         })
//     }

//     return (
//         <div>
//             <h1>Welcome to Registration </h1>
//                 <label for="name">Name:</label><br/>
//                 <input type="text" onChange={handleInputChange} id="name" name="name" placeholder="name"/><br/>
//                 <label for="email">Email:</label><br/>
//                 <input type="text"  onChange={handleInputChange} id="email" name="email" placeholder="email"/><br/>
//                 <label for="Phone">Phone:</label><br/>
//                 <input type="text" onChange={handleInputChange}  id="phone" name="phone" placeholder="phone"/><br/>
//                 <label for="email">Profession:</label><br/>
//                 <input type="text" onChange={handleInputChange} id="profession" name="profession" placeholder="profession"/><br/>
//                 <label for="email">Password:</label><br/>
//                 <input type="text"onChange={handleInputChange}  id="password" name="password" placeholder="password"/><br/>
//                 <label for="email">Confirm Password:</label><br/>
//                 <input type="text" onChange={handleInputChange} id="confirm password" name="password_confirmation" placeholder="confirm password"/><br/>
               
//             <button onClick = {() => {handleRegistration()}}>Register</button>
//             {logged && <button onClick={() => {handleLogout()}}>Logout</button>}
//         </div>
//     )
// }

// export default withRouter(Registration);




import React, {useState, useEffect} from 'react';
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

const Registration = (props) => {
//     const [email, setEmail] = useState("");
//           const [password, setPassword] = useState("");
    
//           const handlePassword = (e) => {
//               setPassword(e.currentTarget.value)
//           }
    
//           const handleEmail = (e) => {
//             setEmail(e.currentTarget.value)
//         }
    
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const handleLogin = () => {
//             const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
//         const headers= {
//             'Content-Type': 'application/json',
//             'X-CSRF-Token': csrf
//           }
//         const data = {
//             "login": {
//                 "email": email,
//                 "password": password
//             }
//         }
//             axios.post("http://localhost:3000/sessions", data, {headers})
//             .then(res => {
//                 if(res.data.loggedIn){
//                     props.history.push("/dashboard")
//                 }
//                 console.log("Logged In res: ", res)
//             })
//             .catch(err => {
//                 console.log("Error in login: ", err)
//             })
//         }

const initialValues = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            phone: "",
            profession: ""
          };
    
          const [logged, setLogged] = useState(false);
          const [nameError, setNameError] = useState(false);
          const [emailError, setEmailError] = useState(false);
          const [passwordError, setPasswordError] = useState(false);
          const [confirmpwdError, setConfirmpwdError] = useState(false);
          const [phoneError, setPhoneError] = useState(false);
          const [professionError, setProfessionError] = useState(false);

          const [token, setToken] = useState("false");
    
          const [values, setValues] = useState(initialValues);
    
          useEffect(() => {
            const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
            setToken(csrf)
            const headers= {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
              }
              console.log("check token: ", csrf)
              const reqData = {
                  test: "value"
              }
            axios.post("http://localhost:3000/check", reqData, {headers})
            .then(res => {
                if(res.data.loggedIn){
                    setLogged(true)
                }
                console.log("Res: ", res)
            })
            .catch(err => {
                console.log("Error: ", err)
            })
            // Update the document title using the browser API
            
          }, []);
    
          const handleInputChange = (e) => {
            e.target.name == "name" ? setNameError(false) : e.target.name == "email" ? setEmailError(false) : e.target.name == "password" ? setPasswordError(false) : e.target.name == "password_confirmation" ? setConfirmpwdError(false) : e.target.name == "phone" ? setPhoneError(false) : setProfessionError(false)
            const { name, value } = e.target;
        
            setValues({
              ...values,
              [name]: value,
            });
          };
    
        
       const handleRegistration = () => {

        values.name == "" ? setNameError(true) : values.email == "" ? setEmailError(true) : values.password == "" ? setPasswordError(true) : values.password_confirmation == "" ? setConfirmpwdError(true) : values.phone == "" ? setPhoneError(true) : values.profession == "" ? setProfessionError(true) : handleSubmitRegistration()
       }
    
        const handleSubmitRegistration = () => {

          

          if(values.password != values.password_confirmation){
            alert("password not matching")
          }
          // else if (values.name === ""){
          //   setNameError(true)
          // }
          else{
            // const csrf2 = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        const headers= {
            'Content-Type': 'application/json',
            'X-CSRF-Token': token,
            "Access-Control-Allow-Origin": "*"
          }
          console.log("Token: ", token)
    
          const data1 = {
            "user": {
                "name": values.name,
                "email": values.email,
                "password": values.password,
                "password_confirmation": values.password_confirmation,
                "phone": values.phone,
                "profession": values.profession
            }
        }
    
    
            axios.post("https://reactrubycms.herokuapp.com:3000/users", data1, {headers})
            .then(res => {
                if(res.data.registered){
                    props.history.push("/login")
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
            Sign Up
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  // id="filled-basic"
                  // variant="filled" 
                  fullWidth
                  // id="name"
                  label="Full Name"
                  type="email"
                  name="name"
                  // autoComplete="name"
                  autoFocus
                  onChange={handleInputChange}
                />
                {nameError && <span style={{color: "red"}}> Please enter full name</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                />
                {emailError && <span style={{color: "red"}}> Please enter email</span> }
              </Grid>

               <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="password"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Create Password"
                  
                  onChange={handleInputChange}
                />
                {passwordError && <span style={{color: "red"}}> Please enter Password</span>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Confirm Password"
                  name="password_confirmation"
                  autoComplete="password"
                  onChange={handleInputChange}
                />
                {confirmpwdError && <span style={{color: "red"}}> Please enter confirm password</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  name="phone"
                  label="Phone No. "
                  id="phone"
                  autoComplete="phone"
                  onChange={handleInputChange}
                />
                {phoneError && <span style={{color: "red"}}> Please enter phone No.</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="email"
                  fullWidth
                  name="profession"
                  label="Profession"
                  id="profession"
                  autoComplete="profession"
                  onChange={handleInputChange}
                />
                {professionError && <span style={{color: "red"}}> Please enter profession</span>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {() => {handleRegistration()}}
            >
             Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
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
export default withRouter(Registration);