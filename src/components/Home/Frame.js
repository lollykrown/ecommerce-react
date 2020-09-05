import React, { Component } from "react";
import Title from "../Title";

export default class Frame extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container custom-bg">
        <Title name="Recommended for you" title="" />
        <div className="row my-4 ml-1">
            <div className="col-10 col-lg-4 pl-0 pr-2 my-card">  
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">A phone called samsung</h5>
                                <p class="card-text">N18000</p>
                                <p class="card-text"><small class="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-4 pl-0 pr-2">  
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">A phone called samsung</h5>
                                <p class="card-text">N18000</p>
                                <p class="card-text"><small class="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-4 pl-0 pr-2">  
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">A phone called samsung</h5>
                                <p class="card-text">N18000</p>
                                <p class="card-text"><small class="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
