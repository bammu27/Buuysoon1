import React from 'react';
import '../App.css'

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#" id='brand'>
         BuuySoon
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/Buuysoon/qdbx0tm">Today's Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://buuysoon.blogspot.com/2023/12/costomer-care.html">Customer Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/Buuysoon/qdbx0tm/list/everything-else-coins-stamps-coins">Coins</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/Buuysoon/qdbx0tm/list/digital-products-coupons-gift-vouchers">Gift Voucher</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/Buuysoon/qdbx0tm/list/everything-else-pet-supplies-dogs">Pet items</a>
            </li>
          </ul>

          

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/signin"> Sign in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/myorders"><span>Returns & Orders</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/Buuysoon/qdbx0tm">Shop now</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://myshopprime.com/checkout/cart"> <i className="fa-solid fa-cart-shopping"></i>Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
