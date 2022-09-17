import React, { useState} from 'react'

import background from "../assets/images/bg.jpg"
import Helmet from '../components/Helmet'
import CheckoutForm from '../components/CheckoutForm'

import ScrollToTop from '../components/ScrollToTop';




const Checkout = () => {

    const [error] = useState("");


  return (
    <Helmet title="Check Out">
        <ScrollToTop />
        <div ClassName="checkout" id="checkout" style={{ backgroundImage: `url(${background})` }}>
            <div>

                    <CheckoutForm Checkout={Checkout} error={error} />
               
            </div>          
        </div>
    </Helmet>
    )
}

export default Checkout
