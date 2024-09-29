// import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className='footer-content'>
              <div className='footer-content-left'>
                  <img src={assets.logo} alt="" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <div className='footer-social-icons'>
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className='footer-content-center'>
                  <h1>COMPANY</h1>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className='footer-content-right'>
                  <h1>GET IN TOUCH</h1>
                  <ul>
                  <li>+1-22-3456-99</li>
                  <li>contact.tomato@gamil.co</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer