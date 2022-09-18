import React, { useState, useEffect, useRef } from 'react'

import { Link, useHistory } from 'react-router-dom'


import background from "../assets/images/bg.jpg"


const Register = () => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setConfirmPassword] = useState('');


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(e.target.value);
        }
        if(id === "email"){
            setEmail(e.target.value);
        }
        if(id === "password"){
            setPassword(e.target.value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    };


    
    //hàm subbmit form và chuyển đến login page
    
    const history = useHistory();
    const handleSubmit = (e) => {
        
        e.preventDefault();

        //nếu tên và email rổng thì hiển thị thông báo lỗi ngược lại sẽ chuyên đến trang login
        if(name.trim()==='' || email.trim()===''){ 
            alert("You must enter name and email !!!"); 
            
          } else {
        
            history.push('/login');    
          }
       
      }


    //Hàm ẩn hiện mật khẩu
    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
    };

    //hàm cho auto check robots
    const[verified, setVerified] =useState(false);

    //invalid password
    const passwordCheck = useRef();
    const cPassword = useRef();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (passwordCheck.current.value === cPassword.current.value) {
                setShowErrorMessage(false);
                setVerified(true);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [isCPasswordDirty])

    const checkPasswords = (e) => {
        setIsCPasswordDirty(true);
        if (isCPasswordDirty) {
            if (passwordCheck.current.value === cPassword.current.value) {
                setShowErrorMessage(false);
                setVerified(true);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }

    }

  return (
    <div ClassName="register" id="register" style={{ backgroundImage: `url(${background})` }}>    
   
    
        <form onSubmit={handleSubmit} >
            <div className="form-inner">
            <h2>CREATE ACCOUNT</h2>

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name" name="name" id="name"  value={name} onChange = {(e) => handleInputChange(e)} placeholder="Your Name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type={passwordShown ? "text" : "password"} name="password" id="password" value={password} ref={passwordCheck}  onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm Password:</label>
                <input type={passwordShown ? "text" : "password"} className={cPasswordClass} name="confirmPassword" id="confirmPassword"  ref={cPassword}
                        onChange={checkPasswords} placeholder="Confirm Password" />
            </div>

            <div className="form-group">
                <label id="label-checkbox"  onClick={togglePassword}><input id="checkbox" name="newsletter" type="checkbox"/></label>
                <span>Hiện mật khẩu</span>
            </div>
            {showErrorMessage && isCPasswordDirty ? <div className="error-pw"> Passwords did not match !</div> : ''}
                
                <Link id="RouterNavLink" onClick={handleSubmit} type="submit">
                    <input  type="submit" disabled={!verified}/>
                </Link>
                <div className="form-group forgot-password">
                    <a href="/login">Already have an account ?</a>
                </div>
            </div>
        </form>
    </div>
    
  )
}

export default Register

