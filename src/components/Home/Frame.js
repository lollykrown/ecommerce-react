import React from "react";
import Title from "../Title";

export default function Frame() {
    return (
      <div className="container custom-bg">
        <Title name="Recommended for you" title="" see="see more..." />
        <div className="row my-4 ml-1 text-capitalize">
            <div className="col-10 col-lg-4 pl-0 pr-2 my-card">  
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="img/product-2.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">A samsung phone</h5>
                                <p className="card-text">&#8358; 18000</p>
                                <p className="card-text"><small className="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-4 pl-0 pr-2">  
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="img/product-1.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">A samsung phone</h5>
                                <p className="card-text">&#8358; 18000</p>
                                <p className="card-text"><small className="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-4 pl-0 pr-2">  
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="img/product-4.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">A samsung phone</h5>
                                <p className="card-text">&#8358; 18000</p>
                                <p className="card-text"><small className="text-muted">Discount</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
