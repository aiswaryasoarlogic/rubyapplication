import React from 'react';
import validator from 'validator'
import { withRouter } from 'react-router';

const Adminlogin = (props) => {

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const handleEmail = (e) => {
      e.preventDefault();
      setEmail(e.currentTarget.value)
    }
    const handleSubmit = (event) => {
      // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log("email: ", email, " pwd: ", password)
        // if(re.test(email.toLowerCase())){
          // alert(email)
          if(validator.isEmail(email)){
            alert("email error")
          // setEmailError(true)
        }
        event.preventDefault();
        // else if(email === "admin@cmsapp.com" && password === "admin"){
        //   sessionStorage.setItem("adminlogged", true);
        //     props.history.replace("/admindashboard")
        // }
        // else{
        //     alert("Invalid credentials!!")
        // }
    }
    return(
        <div>
            <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin login</p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" value={email} className="form-control" onChange={(e) => {
                       handleEmail(e) }}/>
                        {/* setEmail(e.currentTarget.value), setEmailError(false)}}/> */}
                      {emailError && <label style={{color: "red"}} className="form-label" for="form3Example3c">Invalid Email Format!!</label>}
                      {!emailError && <label className="form-label" for="form3Example3c">Your Email</label>}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" value={password} className="form-control" onChange={(e) => {setPassword(e.currentTarget.value)}} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="form-check d-flex justify-content-center mb-5">
                    {/* <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    /> */}
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={() => {handleSubmit()}} className="btn btn-primary btn-lg">Login</button>
                  </div>

                {/* </form> */}

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default withRouter(Adminlogin);