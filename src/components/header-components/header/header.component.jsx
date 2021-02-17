import React from "react";
import { connect } from "react-redux";

import { selectorQuantityItemsCollections } from "../../../redux/reducers/cart/selectors/cart.selector";

import "./header.styles.scss";

const Header = ({ onQuantityCollections }) => (
  <header className="header">
    <div className="header-content">
      <div className="header-logo">
        <img
          src="https://cdn1.iconfinder.com/data/icons/social-58/128/Social-38-512.png"
          alt="logo"
        />
      </div>
      <div className="header-cart-icon">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/2438/2438159.svg?token=exp=1612881538~hmac=394aa179c0089855bd8c004ba43c0dab"
          alt="cart"
        />
        <div
          className={`header-cart-quantity ${
            onQuantityCollections >= 10 ? "more" : ""
          }`}
        >
          {onQuantityCollections}
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  onQuantityCollections: selectorQuantityItemsCollections(state),
});

export default connect(mapStateToProps)(Header);
