import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-2">
                <h1>hello from footer</h1>
            </div>
            <div className="col-10 col-lg-2">
                <h1>hello from footer</h1>
            </div>
            <div className="col-10 col-lg-2">
                <h1>hello from footer</h1>
            </div>
            <div className="col-10 col-lg-2">
                <h1>hello from footer</h1>
            </div>
            <div className="col-10 col-lg-4">
            <h1>hello from footer</h1>
            </div>
          </div>
          <p className="footnotes mt-4">&copy; 2020 <a href="https://lollykrown.xyz">
              Ol&#250;wak&#225;y&#242;d&#233;.</a> All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
