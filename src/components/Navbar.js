import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center">
            <li class="nav-item active ml-2">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/products" className="nav-link">
                products
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="/" className="nav-link">
                Store Locator
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
              to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Help
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <span className="btn btn-warning text-white my-2 my-sm-0" type="submit">
              <i className="fas fa-search"></i>
            </span>
          </form>
          <ul className="navbar-nav align-items-center ml-auto">
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link">
                sell
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link">
                login/signup
              </Link>
            </li>
          </ul>
          <ProductConsumer>
            {(value) => (
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span>
                    <i className="fas fa-cart-plus mr-2"></i>
                  </span>
                  my cart
                  <span className="btn btn-white ml-2">{value.totalItems}</span>
                </ButtonContainer>
              </Link>
            )}
          </ProductConsumer>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainPurple) !important;
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
