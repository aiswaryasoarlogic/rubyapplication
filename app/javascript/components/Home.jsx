import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

const Home = (props) => {
    const handleLogin = () => {
        // alert("login")
        props.history.replace("/login")
    }

    const handleRegistration = () => {
        props.history.replace("/registration")
    }
    return (
   
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">CMS Application</h1>
        <p className="lead">
        A content management system for creating, managing, and optimizing our customers' digital experience. 
        </p>
        <hr className="my-4" />
        <button onClick={() => {handleRegistration()}}>Registration</button>
        <button onClick={() => {handleLogin()}}>Login</button>
        {/* <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Recipes
        </Link> */}
      </div>
    </div>
  </div>
       
       )
    }
export default withRouter(Home);