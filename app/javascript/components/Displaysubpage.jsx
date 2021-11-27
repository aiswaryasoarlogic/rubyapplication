import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from "./Navbar";
import './styles/displaypage.css';
import { withRouter } from 'react-router';
import SaveIcon from '@mui/icons-material/Save';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Displaysubpage = (props) => {

  const initialdata = {
    createdAt: "2021-11-02T14:12:53.356Z",
    description: "k",
    id:4,
    image: "k",
    keywords: "k",
    metadescription: "k",
    pagetitle: "k",
    title: "A",
    updated_at: "2021-11-02T14:12:53.356Z",
    userid: 13,
      }

  const [editable, setEditable] = React.useState(false);
  const [pagedata, setPageData] = React.useState(initialdata);


  const initialValues = {
    title: "",
    pagetitle: "",
    keywords: "",
    metadescription: "",
    description: "",
    image: "",
    userid: sessionStorage.getItem("userid")
  };

  const [values, setValues] = React.useState(initialValues);

  const handleSubmit = () => {
    const pageid = localStorage.getItem('subpageid');
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const headers= {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    }
    const data = {
      "page": values
  }
  console.log("data: ",data)
    axios.post(`http://localhost:3000/api/v1/updatepage?pageid=${pageid}`, data, {headers})
    .then(res => {
        // if(res.data.loggedIn){
        //     props.history.push("/dashboard")
        // }
        console.log("Logged In res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
        alert("page data not found!! ")
        props.history.replace("/viewpage")
    })

    console.log("values: ", values)
  }

  const deletehandler = () => {
    const pageid = localStorage.getItem('subpageid');
    if(window.confirm("Are you sure you want to delete this page? ")){
      console.log("Pageid: ", pageid)
    
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const headers= {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    }
    const data = {
      "page": values
  }
  console.log("data: ",data)
    axios.post(`http://localhost:3000/api/v1/deletesubpage?pageid=${pageid}`, data, {headers})
    .then(res => {
        // if(res.data.loggedIn){
        //     props.history.push("/dashboard")
        // }
        props.history.push("/viewpage")
        console.log("delete page res: ", res)
    })
    .catch(err => {
        console.log("Error in login: ", err)
    })
  }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };


  React.useEffect(() => {
    if(!sessionStorage.getItem('userid')){
      alert("Please login again!!")
      props.history.push("/login")
    }
    else{

    const id = localStorage.getItem("subpageid");
    console.log("ID: ", id);
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    // setToken(csrf)
    const headers= {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
    //   console.log("check token: ", csrf)
      // const reqData = {
      //     "page": {
      //       "id":  id
      //     }
      // }
    axios.get(`http://localhost:3000/api/v1/subpage/show?pageid=${id}`, {headers})
    .then(res => {
        // if(res.data.loggedIn){
        //     setLogged(true)
        // }
        setPageData(res.data);
        setValues({
          ...values,
          title: res.data.title,
          pagetitle: res.data.pagetitle,
          keywords: res.data.keywords,
          metadescription: res.data.metadescription,
          description: res.data.description,
          image: res.data.image
        });
        console.log("Res: ", res)
    })
    .catch(err => {
        console.log("Error: ", err)
    })
  }
    
  }, [editable]);

  

  return (
    <Box sx={{ display: 'flex' }}>
     
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">
            
        </Typography>
        {!editable && <div id="notEditable" >
            <div>
                <h2 id = "title1">{pagedata.title}</h2>
                
                <h3 id="title1">{pagedata.pagetitle}</h3><br/><br/>
                {/* <button style={{float: "right"}} onClick={() => {setEditable(true)}} type="button" >Edit Page</button> */}
                <Button style={{float: "right"}} onClick={() => {setEditable(true)}} variant="contained">Edit</Button>
                <Button style={{float: "right"}} onClick={() => {deletehandler()}} color="error" variant="contained">Delete</Button>
                <p  id="tab"><b>Keywords: </b>{pagedata.keywords}</p><br/>
                {/* <h4><b>Meta Description</b></h4> */}
                <p id="tab">{pagedata.metadescription}</p><br/>
                <p>{pagedata.description}</p><br/>
                    <img style={{width: "100%", height: "100%"}} src={pagedata.image}/>
                    {/* <h3>Subpages</h3>
                    <ul>
                    
                        <li><a href="/subpagedata"> subpage1</a></li>
                
                    </ul> */}
            </div>
            </div>
        }

    {editable && <div id="editable" >
        <form action="/updatepage?pageid" method = "POST">
            <h3 style={{textAlign: "center"}}>Edit Page</h3><br/>
            <h4>Title</h4>
            <textarea type="text" onChange={handleInputChange} id="title" rows="1" cols="130" name="title" value={values.title}></textarea><br/><br/>
            <h4>Page Title</h4>
            <textarea type="text" onChange={handleInputChange} id="pagetitle" rows="1" cols="130" name="pagetitle" value={values.pagetitle}></textarea><br/><br/>
            <h4>Keywords</h4>
            <textarea type="text" onChange={handleInputChange} id="keywords" rows="1" cols="130" name="keywords" value={values.keywords}></textarea><br/><br/>
            <h4>Meta Description</h4>
            <p id="tab">
                <textarea type="text" onChange={handleInputChange} id="metadescription" rows="1" cols="130" name="metadescription" value={values.metadescription}></textarea>
            </p><br/>
            <h4>Description</h4>
            <textarea type="text" onChange={handleInputChange} id="description" rows="10" cols="130" name="description" value={values.description}></textarea><br/>

            <h4>Image</h4>
            <textarea type="text" onChange={handleInputChange} id="keywords" rows="1" cols="130" name="image" value={values.image}></textarea><br/><br/>
            
            <h4>Change Image</h4>    
            <input type="file" id="user_image" name="page[image]" placeholder="Change Image" value="" /><br/>
    
            <button style = {{float: "right", marginLeft: "10px"}} type="button" onClick={() => {setEditable(false)}} className="btn btn-warning">Cancel</button>
            <Button startIcon={<SaveIcon />} variant="contained" style = {{float: "right"}} onClick={() => {handleSubmit(); setEditable(false)}} >Save</Button>
        </form> 
    </div>
}
    

      </Box>
    </Box>
  );
}

export default withRouter(Displaysubpage);
