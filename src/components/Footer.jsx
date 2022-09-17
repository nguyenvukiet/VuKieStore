import React from 'react'

import {Link} from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.png'
import fb from '../assets/images/fb.png'
import ig from '../assets/images/ig.png'
import wt from '../assets/images/wt.png'
import yt from '../assets/images/yt.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Liên hệ",
    path: "/about"
  },
  {
    display: "Tuyển dụng",
    path: "/about"
  },
  {
    display: "Tin tức",
    path: "/about"
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about"
  }
]

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách thanh toán",
    path: "/about"
  }
]

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <Grid
                col= {4}
                mdCol = {2}
                smCol = {2}
                gap = {10}
            >
              <div>
                  <div className="footer__title">
                    Hỗ trợ khách hàng
                  </div>
                  <div className="footer__content">
                    <p>
                      HotLine: <strong><a href="tel:+15555551212">555-555-1212</a></strong>
                    </p>
                    <p>
                      Liên hệ đặt hàng 
                    </p>
                    <p>
                      Báo cáo hỗ trợ 
                    </p>
                    <p>
                      Góp ý của khách hàng 
                    </p>
                    <div className="payment">
                      <img src={card1} className="pay-method" alt="pay-method"/>
                      <img src={card2} className="pay-method" alt="pay-method"/>
                      <img src={card3} className="pay-method" alt="pay-method"/>
                      <img src={card4} className="pay-method" alt="pay-method"/>
                    </div>
                  </div>
              </div>
              <div>
                  <div className="footer__title">
                    Về cửa hàng Vu Kie
                  </div>
                  <div className="footer__content">
                    {
                      footerAboutLinks.map((item, index) =>(
                        <p key={index}>
                          <Link to={item.path}>
                              {item.display}
                          </Link>
                        </p>
                      ))
                    }
                  </div>
              </div>
              <div>
                  <div className="footer__title">
                    Chăm sóc khách hàng
                  </div>
                  <div className="footer__content">
                    {
                      footerCustomerLinks.map((item, index) =>(
                        <p key={index}>
                          <Link to={item.path}>
                              {item.display}
                          </Link>
                        </p>
                      ))
                    }
                    <a className="social-link" href="/">
                      <img src={fb} className="icon-link" alt="link-social"/>
                    </a>
                    <a className="social-link" href="/">
                      <img src={ig} className="icon-link" alt="link-social"/>
                    </a>
                    <a className="social-link" href="/">
                      <img src={wt} className="icon-link" alt="link-social"/>
                    </a>
                    <a className="social-link" href="/">
                      <img src={yt} className="icon-link" alt="link-social"/>
                    </a>
                  </div>
              </div>
              <div className="footer__about">
                <p>
                  <Link to="/">
                    <img src={logo} className="footer__logo" alt="footer__logo"/>
                  </Link>
                </p>
                <p className="footer__aboutus">
                  Hướng tới niềm vui mua sắm trực tuyến mới mỗi ngày cho hàng triệu người tiêu dùng Việt Nam. Hãy cùng Vu Kie hướng tới một cuộc sống năng động tích cực hơn trong thời đại công nghệ số.
                </p>
              </div>
            </Grid>
        </div>
    </footer>
  )
}

export default Footer
