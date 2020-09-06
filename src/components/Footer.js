import React, { Component } from "react";
import Title from "./Title";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        <div className="container">
            <div className="row my-4 pt-4">
              <div className="col-md-6">
              <Title name="Ol&#250;wak&#225;y&#242;d&#233; – Nigeria Mall" title="" />
                <p className="grey"> 
                  The digital marketing agency for the future. Aiming to provide
                  a permanent solution to businesses all around the world.
                </p>
              </div>
              <div class="col-md-2 col-sm-6">
                <h2>Company</h2>
                <ul class="links">
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-6">
                <h2>Legal</h2>
                <ul class="links">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-6">
                <h2>Follow Us</h2>
                <ul class="links">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

          <p className="grey mt-4">
            &copy; 2020{" "}
            <a className="white" href="https://lollykrown.xyz">
              Ol&#250;wak&#225;y&#242;d&#233;.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
