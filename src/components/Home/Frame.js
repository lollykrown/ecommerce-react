import React, { Component } from "react";
import Title from "../Title";

export default class Frame extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid ml-3">
        <Title name="Recommended for you" title="" />
        <div className="row my-4">
            <div className="col-6 col-lg-3 pl-0 pr-2">  
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
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
