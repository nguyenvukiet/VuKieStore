import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import Grid from '../components/Grid'
import { Link } from 'react-router-dom';


const LoginForm = ({Login, error}) => {

  //hàm cho auto check robots
  const[verified, setVerified] =useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
   

  const [details, setDetails] = useState({name:"",email:"", password:""});
  //Hàm ẩn hiện mật khẩu
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const submitHandler = e => {
        e.preventDefault();

        Login(details);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>LOG IN TO YOUR ACCOUNT</h2>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" placeholder="" id="name" onChange={e => setDetails({...details,name: e.target.value})} value={details.name}/>
        </div>

        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>
        </div>

        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type={passwordShown ? "text" : "password"} name="password" placeholder="" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password}/>
        </div>
        
        <div className="form-group">
          
          <label id="label-checkbox"  onClick={togglePassword}><input id="checkbox" name="newsletter" type="checkbox"/></label>
          <span>Hiện mật khẩu</span>
         
        </div>

        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
       
        

        <input type="submit" value="Login" disabled={!verified}/>
        <div className="form-group forgot-password">
          <a href="/">Forgot your password ?</a>
        </div>
        <div className="form-group__register">
          <p>Don't have an account ?  
            <Link to="/register">
               Register
            </Link></p>
        </div>
        <div className="cookies">
                <Grid
                        col= {3}
                        mdCol = {3}
                        smCol = {3}
                        gap = {20}
                >
                    <div>
                    <a href="/">Privacy Notice</a>
                    </div>
                    <div>
                    <a href="/">Cookies Notice</a>
                    </div>
                    <div>
                    <a href="/">Cookies Settings</a>
                    </div>
                </Grid>
            </div>
      </div>
   

    </form>
  )
}


export default LoginForm
