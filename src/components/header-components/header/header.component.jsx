import { connect } from "react-redux"

import { selectorQuantityItemsCollections } from "../../../redux/reducers/cart/selectors/cart.selector"

import "./header.styles.scss"

const Header = ({ quantityCollections }) => (
  <header className="header">
    <div className="header-content">
      <div className="header-logo">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/3800/3800024.svg?token=exp=1612881037~hmac=207657aeea73aa4bce7f351a6e51a8ee"
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
            quantityCollections >= 10 ? "more" : ""
          }`}
        >
          {quantityCollections}
        </div>
      </div>
    </div>
  </header>
)

const mapStateToProps = (state) => ({
  quantityCollections: selectorQuantityItemsCollections(state),
})

export default connect(mapStateToProps)(Header)
