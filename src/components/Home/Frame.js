import React, { Component } from "react";
import Title from "../Title";

export default class Frame extends Component {
  render() {
    return (
      <div className="container custom-bg">
        <Title name="Recommended for you" title="" see="see more..." />
        <div className="row my-4 ml-1 text-capitalize">
            {this.props.products.map(p => (
                        <div className="col-10 col-lg-4 pl-0 pr-2 my-card">  
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={p.imgUrls[0] || p.imgUrls[1] || p.imgUrls[3] || p.imgUrls[4]} 
                                    className="card-img" alt="product"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">&#8358; {p.price}</p>
                                        <p className="card-text"><small className="text-muted">Discount</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
      </div>
    );
  }
}
