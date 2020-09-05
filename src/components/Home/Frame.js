import React, { Component } from "react";
import Title from "../Title";

export default class Frame extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid ml-3">
        <Title name="Recommended for you" title="" />
        <div className="row my-3">
          <div className="col-6 col-lg-3 pl-0">
            <div className="card">
              <div className="card-body">This is some text within a card.</div>
            </div>
          </div>
          <div className="col-6 col-lg-3 pl-0 pr-2">
            <div className="card">
              <div className="card-body">This is some text within a card.</div>
            </div>
          </div>
          <div className="col-6 col-lg-3 pl-0 pr-2">
            <div className="card">
              <div className="card-body">This is some text within a card.</div>
            </div>
          </div>
          <div className="col-6 col-lg-3 pr-0 pl-2">
            <div className="card">
              <div className="card-body">This is some text within a card.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
