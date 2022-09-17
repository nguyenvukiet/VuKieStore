import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import logo from '../assets/images/logo.png'
import background from "../assets/images/bg.jpg"


import LoginForm from '../components/LoginForm'


const Login = () => {
    const adminUser = {
        email: 'admin@gmail.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.email === adminUser.email && details.password === adminUser.password) {
        console.log("Logged in");
        setUser({
            name:details.name,
            email:details.email
        });
        }else {
        setError("Details do not match !");
        }
    }

    // const Logout = () => {
    //     setUser({name:"", email:""});
    // }



    return (
        <Helmet title="Login">
        <div ClassName="login" id="login" style={{ backgroundImage: `url(${background})` }}>
            <div>
                {(user.email !== "") ? (
                    <div className="welcome">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h1>Logged in successfully</h1>
                    <h2>Wecome <span>{user.name}</span> to the VuKie Store!</h2>
                    <Link to="/">
                        <button onClick="/">Continue</button>
                    </Link>
                    </div>
                ) : (
                    <LoginForm Login={Login} error={error} />
                )}
            </div>          
        </div>
                    
        </Helmet>
    )
}

export default Login
