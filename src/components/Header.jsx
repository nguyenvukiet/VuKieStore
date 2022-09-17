import React, {useRef, useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'



import logo from '../assets/images/logo.png'
//import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types'


const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Products",
    path: "/catalog"
  },
  {
    display: "About",
    path: "/about"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const Header = () => {

  const cartItems = useSelector((state) => state.cartItems.value)

  const [totalProduct, setTotalProduct] = useState(0)

  useEffect(() => {
    setTotalProduct(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
  }, [cartItems])



  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  //const headerRef = useRef(null)

  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //         headerRef.current.classlist.add('shrink')
  //       } else {
  //         headerRef.current.classlist.remove('shrink')
  //       }
  //     })
  //     return () => {
  //       window.removeEventListener("scroll")
  //     };
  // }, []);

  const menuLeft = useRef(null)

  const menuToggle = () => menuLeft.current.classList.toggle('active')

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(!isShown);
  };

  return (
    <div className="header"> 
      <div className="container">
        <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
        </div>
        <div className="header__menu">
            <div className="header__menu__mobile__toggle" onClick={menuToggle}>
              <i className='bx bx-menu-alt-left'></i>
            </div>
          <div className="header__menu__left" ref={menuLeft}>
            
            <div className="header__menu__left__close" onClick={menuToggle}>
                <i className='bx bx-x' ></i>
            </div>
            {
              mainNav.map((item, index) =>(
                <div 
                    key={index} 
                    className={`header__menu__item header__menu__left__item ${index 
                    === activeNav ? 'active' :''}`}
                    onClick={menuToggle}
                >
                  <Link to={item.path}>
                      <span>{item.display}</span>
                  </Link>
                </div>
              ))
            }
          </div>    
          <div className="header__menu__right">
              <div className="header__menu__item header__menu__right__item">
                <i onClick={handleClick} className='bx bx-search'></i>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <Link to='/cart'>
                  <i className='bx bx-shopping-bag' ></i> <span className="header__menu__right__item__total-product">{totalProduct}</span>               
                </Link>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <Link to='/login'>
                  <i className='bx bx-user'></i>
                </Link>
              </div>
          </div>     
        </div>
      </div>
      {isShown && (
        <div id="toggle-search" class="collapse in">
        <div class="toggle-search-input">
            <form role="search" method="get" className="search-form">
                <input type="search" class="search-field" placeholder = "Tìm kiếm..."
                autocomplete="off"/>
            </form>
        </div>
    </div>
      )}
    </div>
  )
}

export default Header
