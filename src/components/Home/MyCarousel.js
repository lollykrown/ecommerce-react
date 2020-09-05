import React, { Component } from 'react';
import styled from "styled-components";

class MyCarousel extends Component {
  
  render(){
    console.log(this.props)
    return ( 
        <CarouselWrapper>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/ex.jpg" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img src="img/ex2.jpg" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img src="img/ex3.jpg" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img src="img/ex4.jpg" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Fourth slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img src="img/ex5.jpg" className="d-block w-100" alt="..."/>
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Fifth slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div> */}
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </CarouselWrapper>
    );
  }
}

const CarouselWrapper = styled.nav`
  background: var(--mainPurple) !important;
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default MyCarousel;
