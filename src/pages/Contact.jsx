import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import PhoneInput from 'react-phone-number-input'

import Map from '../components/Map'
import 'react-phone-number-input/style.css'

import ScrollToTop from '../components/ScrollToTop';




const Contact = () => {

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState()
 
    const [address, setAddress] = useState('');
    const [text, setText] = useState('');

  
    const [error, setError] = useState(null);

    //hàm cho auto check robots
    const[verified, setVerified] =useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  

    const handleChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(e.target.value);
        }
        if (id === "email") {
            if (!isValidEmail(e.target.value)) {
                setError('Email is invalid !');
                
              } else {
                setVerified(true);
                setError(null);
              }
              setEmail(e.target.value);
        }
     
        if(id === "address"){
            setAddress(value);
        }
        if(id === "text"){
            setText(value);
        }
    };

    const SubmitContact = (e) => {
        
        e.preventDefault();
       
        //nếu thông tin bị rổng thì hiển thị thông báo lỗi ngược lại sẽ thông báo thành công
        if(name.trim()==='' || email.trim()===''  ||value.trim()===''|| address.trim()==='' || text.trim() === '') { 
            alert("Please fill in all the information in the input !!!"); 
            return;
        }         
        alert(" You have responded successfully !!!")
    }

   

  return (
    

    <Helmet title="Contact">
        <ScrollToTop />
        <div className="contact">
            <from >
                <Grid
                    col= {3}
                    mdCol = {2}
                    smCol = {1}
                    gap = {20}
                >           
                        <div className="contact__about">
                            <h1>Contact</h1>
                            <p>HotLine: <strong>0866077088</strong></p>
                            <p>Email: vukiestore@gmail.com</p>
                            <p>Address: Công ty cổ phần Thời trang VUKIE
                            <br />Phòng 301 Tòa nhà VuKie, 170 La Thành, Q. Đống Đa, Hà Nội</p>
                            <p>Website: www.vukie.com</p>
                            <p>Liên hệ đặt hàng: <a href="tel:+0125485698">0125485698</a></p>
                            <p>Góp ý khiếu nại:<a href="tel:+19008866">1900 8866</a></p>
                        </div>

                        <div className="contact__info">
                                    <div>
                                        <h2>Your FullName</h2>
                                        <input type="name" name="name" placeholder="Enter your name" id="name" value={name}  onChange = {(e) => handleChange(e)} />
                                    </div>
                                    <div>
                                        <h2>Phone Number</h2>
                                        <PhoneInput
                                            id="phone"
                                            maxLength="15"
                                            minLength="12"
                                            defaultCountry="VN"
                                            international
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange = {setValue}/>
                                            
                                    </div>
                        </div>  

                        <div className="contact__info">
                                    <div>
                                        <h2 style={{display: 'inline-block'}}>Email </h2>{error && <span style={{color: 'red', float: 'right', fontSize: '1.2rem'}}>{error}</span>}
                                        <input type="email" name="email" placeholder="Enter your email" id="email" value={email}   onChange = {(e) => handleChange(e)}/>
                                        
                                    </div>
                                    <div>
                                        <h2>Address</h2>
                                        <input type="text" name="diachi" placeholder="Enter your address" id="address" value={address}  onChange = {(e) => handleChange(e)}/>
                                    </div>
                        </div>    

                </Grid>
                <div className="contact__content">
                    <h2>Message</h2>
                    <textarea type="text" name="text" placeholder="Enter your message" id="text" value={text} onChange = {(e) => handleChange(e)}/>
                    <input  type="submit" value="submit" onClick={SubmitContact} disabled={!verified}/>
                </div>
            </from>
            <div className="contact__map">
                <Map/>
            </div>
        </div>
    </Helmet>
  )
}

export default Contact
