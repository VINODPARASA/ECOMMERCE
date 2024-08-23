import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform where businesses sell products or services electronically, allowing customers to browse, select, and purchase items from the comfort of their homes. These websites come in various forms, including business-to-consumer (B2C), business-to-business (B2B), and consumer-to-consumer (C2C) models, each catering to different market dynamics. Common features include detailed product listings, secure payment gateways, user accounts, search functionality, and order tracking. E-commerce platforms face challenges such as intense competition, security concerns, logistics management, and the need to build and maintain customer trust. Popular platforms like Shopify, WooCommerce, and Magento offer solutions for businesses to establish and operate their online stores efficiently. Overall, e-commerce websites play a vital role in today's digital economy, providing convenient shopping experiences and opening up new avenues for businesses to reach global audiences.</p>
        </div>
    </div>
  )
}

export default DescriptionBox