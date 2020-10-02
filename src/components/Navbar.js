import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

function  Navbar() {
  const items = [
    {
      id: 1,
      icon: "fas fa-tshirt",
      name: "accessories",
      subcategories: [
        "Clothings",
        "Shoes",
        "Jewelries",
        "handbags/Wallets",
        "Accessories",
      ],
    },
    {
      id: 2,
      icon: "fas fa-medkit",
      name: "health & beauty",
      subcategories: [
        "Powder",
        "Mascara",
        "Eyeshadow",
        "Shampoo",
        "Wigs",
        "Cream",
        "Deodorants",
      ],
    },
    {
      id: 3,
      icon: "fas fa-clock",
      name: "watches",
      subcategories: [
        "Wrist watches",
        "Bracelets",
        "Necklaces"
      ],
    },
    {
      id: 4,
      icon: "fas fa-mobile",
      name: "phones & tablets",
      subcategories: [
        "Smartphones",
        "Basic Phones",
        "iPads",
        "Tablets",
        "Accessories",
      ],
    },
    {
      id: 5,
      icon: "fas fa-male",
      name: "men",
      subcategories: [
        "Shirts",
        "Hoodies",
        "Pajamas",
        "Boxers",
        "Robes",
        "Joggers",
        "Trousers"
      ],
    },
    {
      id: 6,
      icon: "fas fa-female",
      name: "women",
      subcategories: [
        "Tops",
        "Gowns",
        "Jumpsuits",
        "Blouses",
        "Hoodies",
        "Shirts"
      ],
    },
    {
      id: 7,
      icon: "fas fa-child",
      name: "kids",
      subcategories: ["Diapers", "Toys", "Feeds", "kids"],
    },
    {
      id: 8,
      icon: "fas fa-shopping-bag",
      name: "shoes",
      subcategories: ["Loafers", "mocasin", "sneakers", "ladies' shoes"],
    },
    {
      id: 9,
      icon: "fas fa-shopping-basket",
      name: "supermarket",
      subcategories: [
        "Drinks",
        "Grains",
        "Pasta",
        "Juices",
        "Cereals",
        "Noodles",
      ],
    },
    {
      id: 10,
      icon: "fas fa-futbol",
      name: "sporting goods",
      subcategories: [
        "Dumbells",
        "Trainers",
        "Ropes",
        "Nikes",
        "Treadmills",
        "Balls",
      ],
    },
    {
      id: 11,
      icon: "fas fa-home",
      name: "household items",
      subcategories: ["Rugs", "Mats", "Pillows", "Jugs"],
    },
    {
      id: 12,
      icon: "fas fa-dot-circle",
      name: "other",
      subcategories: ["Books", "Movies", "Pets", "Musical", "Instruments"],
    },
  ];

    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={'logo512.png'} alt="store" width="40" height="50" className="navbar-brand" />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item active ml-2">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/" className="nav-link text-white dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {items.map(item => <Link key={item.id} className="dropdown-item text-capitalize" to={`/${item.name}`}>{item.name}</Link>)}
                <div className="line"></div>
                <Link className="dropdown-item" to="/">Settings</Link>
              </div>
            </li>
            <li className="nav-item ml-2">
              <Link to="/" className="nav-link text-white">
                Store Locator
              </Link>
            </li>
            <li className="nav-item ml-4 d-none d-lg-block">
              <Link to="/" className="nav-link text-white">
                help
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link text-white">
                contact us
              </Link>
            </li>
          </ul>
          <form className="form-inline d-none d-lg-block ml-auto my-2 my-lg-0">
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
              <Link to="/" className="nav-link text-white">
                sell
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link text-white">
                login/signup
              </Link>
            </li>
          </ul>
          <ProductConsumer>
            {(value) => (
              <Link to="/cart" className="ml-auto ">
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

const NavWrapper = styled.nav`
  background: var(--mainPurple) !important;
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
