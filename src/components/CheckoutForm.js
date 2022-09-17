import React, {useEffect, useState} from 'react'
import Grid from '../components/Grid'
import CartItem from '../components/CartItem'
import numberWithCommas from '../utils/numberWithCommas'
import productData from '../assets/fake-data/products'
import { useSelector } from 'react-redux'


const CheckoutForm = () => {



    const [error] = useState("");

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProduct, setCartProduct] = useState([])
  
    const [totalPrice, setTotalPrice] = useState(0)
    
    const [details, setDetails] = useState({name:"",email:"", address:"", city:"", tel:""});
  

    
    // Password toggle handler
    
        const submitHandler = e => {
            e.preventDefault();
    
            if(details.email !== "" && details.name !== "" && details.tel !== "" && details.address !== "") 
            {
                alert("Your order successfully !!!");
            }else {
                alert("Please fill in all the information in the input !!!");
                }
        };

        
    useEffect(() => {
        setCartProduct(productData.getCartItemsDetail(cartItems))
        
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
      }, [cartItems])
    
    

  return (
    <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>CHECK OUT</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="cart__list">
                    {
                        cartProduct.map((item, index) =>(
                        <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
                <div className="cart__list__txt__price">
                    <span>Thành tiền: <strong>{numberWithCommas(totalPrice)}</strong></span>
                </div>
                <Grid
                col= {2}
                mdCol = {2}
                smCol = {1}
                gap = {10}
                >          
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="name" name="name" placeholder="Name" id="name" onChange={e => setDetails({...details,name: e.target.value})} value={details.name}/>

                            <label htmlFor="phone">Phone number:</label>
                            <input type="tel" name="tel" placeholder="Phone number" id="tel" onChange={e => setDetails({...details,tel: e.target.value})} value={details.tel}/>
                        </div>

                        <div className="form-group ">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Email" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}/>
                            <label htmlFor="city">City:</label>
                            <select id="country" name="country" placeholder="City">
                                <option value="australia">TP.HCM</option>
                                <option value="canada">Ha Noi</option>
                                <option value="usa">An Giang</option>
                                <option value="usa">Bạc Liêu</option>
                                <option value="usa">Bến Tre</option>
                                <option value="usa">Cao Bằng</option>
                                <option value="usa">Cần Thơ</option>
                                <option value="usa">Phú Yên</option>
                                <option value="usa">Kiên Giang</option>
                                <option value="usa">Tiền Giang</option>
                                <option value="usa">Vĩnh Long</option>
                                <option value="usa">Trà Vinh</option>
                                <option value="usa">Tây Ninh</option>
                            </select>
                        </div>
                </Grid>
                <div className="form-group"  id="address">
                    <label htmlFor="address">Address:</label>
                    <input type="address" name="address" placeholder="Address: " onChange={e => setDetails({...details,address: e.target.value})} value={details.address}/>
                    <i class='bx bx-credit-card'></i><i class='bx bxl-visa'></i><i class='bx bxl-paypal'></i>
                    <input type="submit" value="Checkout"/>
                </div>
            </div>
        </form>
        

  )
}

export default CheckoutForm
