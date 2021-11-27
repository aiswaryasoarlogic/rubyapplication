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
import "./styles/profile.css";
const drawerWidth = 240;

function Profile(props) {

 const [userdata, setUserdata] = React.useState([]);
 const initialValues = {
	name: "",
	email: "",
	phone: "",
	profession: "",
	address: "",
	image: "",
	id: ""
  };

  

const [userdetails, setUserdetails] = React.useState(initialValues);

const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {

	console.log("values: ", userdetails)
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
	const headers= {
		'Content-Type': 'application/json',
		'X-CSRF-Token': csrf
		}
    const data = {
      "user": userdetails
  }
  console.log("data: ",data)
    axios.post(`http://localhost:3000/updateuser`, data, {headers})
    .then(res => {
        console.log("Update res: ", res)
		alert("Profile updated successfully!!")
		window.location.reload(true);
    })
    .catch(err => {
        console.log("Error in update: ", err)
        alert("Something went wrong!! ")
        props.history.replace("/profile")
    })

  }

  React.useEffect(() => {
	if(!sessionStorage.getItem('userid')){
		alert("Please login again!!")
		props.history.push("/login")
	  }
	  else{

	
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers= {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
	  const data = {
		"page": "test"
	}

    axios.post(`http://localhost:3000/userdata`, data, {headers})
    .then(res => {
      // setPageData(res.data)
       setUserdata(res.data.userdata)
	   setUserdetails({
		...userdetails,
		name: res.data.userdata.name,
		email: res.data.userdata.email,
		phone: res.data.userdata.phone,
		address: res.data.userdata.address,
		profession: res.data.userdata.profession,
		image: res.data.userdata.image,
		id: res.data.userdata.id
	  });
        console.log("Logged In res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
    })
}
  }, [])

  

  return (
    <Box sx={{ display: 'flex' }}>
    <Navbar />
    <Box
      style={{background: "#f7f7ff"}}
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
    <div className="container" >
		<div className="main-body">
			<div className="row">
				<div className="col-lg-4">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								{/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" /> */}
								<img src={userdata.image} alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
								<div className="mt-3">
									<h4>{userdata.name}</h4>
									<p className="text-secondary mb-1">{userdata.address}</p>
									<p className="text-muted font-size-sm">{userdata.profession}</p>
									{/* <button className="btn btn-primary">Follow</button>
									<button className="btn btn-outline-primary">Message</button> */}
								</div>
							</div>
							<hr className="my-4" />
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
									<span className="text-secondary">https://bootdey.com</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
									<span className="text-secondary">{userdata.name}</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
									<span className="text-secondary">@{userdata.name}</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
									<span className="text-secondary">bootdey</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
									<span className="text-secondary">{userdata.name}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="card">
						<div className="card-body">
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Full Name</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="name" className="form-control" value={userdetails.name} />
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Email</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="email" className="form-control" value={userdetails.email} />
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Phone</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="phone" className="form-control" value={userdetails.phone} />
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Profession</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="profession" className="form-control" value={userdetails.profession} />
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Address</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="address" className="form-control" value={userdetails.address} />
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3"><br/>
									<h6 className="mb-0">Image URL</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" onChange={handleInputChange} name="image" className="form-control" value={userdetails.image} />
								</div>
							</div>
							<div className="row">
								<div className="col-sm-3"></div>
								<div className="col-sm-9 text-secondary">
									<input type="button" className="btn btn-primary px-4" onClick={() => handleSubmit()} value="Save Changes" />
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
									<h5 className="d-flex align-items-center mb-3">Project Status</h5>
									<p>Web Design</p>
									<div className="progress mb-3" style={{height: "5px"}}>
										<div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Website Markup</p>
									<div className="progress mb-3" style={{height: "5px"}}>
										<div className="progress-bar bg-danger" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>One Page</p>
									<div className="progress mb-3" style={{height: "5px"}}>
										<div className="progress-bar bg-success" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Mobile Template</p>
									<div className="progress mb-3" style={{height: "5px"}}>
										<div className="progress-bar bg-warning" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Backend API</p>
									<div className="progress" style={{height: "5px"}}>
										<div className="progress-bar bg-info" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	</div>
  </Box>
    </Box>
  );
}

Profile.propTypes = {
  window: PropTypes.func,
};

export default withRouter(Profile);






