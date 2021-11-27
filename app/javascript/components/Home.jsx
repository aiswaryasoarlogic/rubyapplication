import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import Button from '@mui/material/Button';
import "./styles/home.css"

const Home = (props) => {
    const handleLogin = () => {
        // alert("login")
        props.history.replace("/login")
    }

    const handleRegistration = () => {
        props.history.replace("/registration")
    }
    return (
   
  // <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
  //   <div className="jumbotron jumbotron-fluid bg-transparent">
  //     <div className="container secondary-color">
  //       <h1 className="display-4">CMS Application</h1>
  //       <p className="lead">
  //       A content management system for creating, managing, and optimizing our customers' digital experience. 
  //       </p>
  //       <hr className="my-4" />
  //       <button onClick={() => {handleRegistration()}}>Registration</button>
  //       <button onClick={() => {handleLogin()}}>Login</button>
  //     </div>
  //   </div>
  // </div>



  <div class="container" style={{marginTop: "20px"}}>
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <a class="nav-link active" href="http://lacodeid.com">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/login'>Login</Link>
              {/* <a class="nav-link" href="/login">Login</a> */}
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li> */}
          </ul>
        </nav>
        <h3 class="text-muted">Content Management System</h3>
      </div>

      <div class="jumbotron">
        <h1 class="display-3">Ruby Application</h1>
        <p class="lead">This is a content management system where you can create, edit and delete your own pages. Created using ruby on rails and react as front end</p>
        {/* <p ><button class="btn btn-lg btn-success"  onClick={() => {handleRegistration()}}>Sign up today</button></p> */}
        <Button onClick={() => {handleRegistration()}} variant="contained">Sign up today</Button>
       
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Launch demo modal
            </button> */}
      </div>

      <div class="row marketing">
        <div class="col-lg-6">
          <h4>Create Page</h4>
          <p>You can create new pages, articles of your choice, add images to it and share it with anyone.</p>

          <h4>Create Subpage</h4>
          <p>There is option to create subpage for your pages, you can add as many subpages you want, anytime edit and delete it</p>

          <h4>SEO Page</h4>
          <p>There is an SEO page where you can get the metadescription and keywords for all pages</p>
        </div>

        <div class="col-lg-6">
          <h4>View Page</h4>
          <p>View page displays the list of pages created by you. You can view and edit them anytime</p>

          <h4>Dashboard</h4>
          <p>There is a dashboard which you can view. It shows a summary of all pages you created and maintained. </p>

          <h4>Profile</h4>
          <p>You can create your profile, add images and make it as attractive as you can</p>
        </div>
      </div>

      <footer class="footer">
        <p>Starter ©<a href="http://lacodeid.com">rubycmsapp.com</a> 2021</p>
      </footer>
<div class="modal" id="exampleModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      {/* <div class="modal-body">
    <form class="form-signin">
      <div class="text-center mb-4">
        <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
        <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
        <label for="inputPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
    </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div> */}
    </div>
  </div>
</div>

    </div>
       
       )
    }
export default withRouter(Home);