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
        </div>
      </div>
    );
  }
}

export default Footer;
