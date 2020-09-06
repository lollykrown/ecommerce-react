import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import $ from 'jquery';

export default class Item extends React.Component {
    // const { id, title, img, price, total, count } = item;
    // const { increment, decrement, removeItem, handleDetail } = value
  // return (
  //     // <div className="my-2 text-capitalize">
  //       <div className="black titl dropdown">
  //         {/* <i className={item.icon}></i> */}
  //         {/* <span className="ml-3">{item.name}</span> */}
  //         <Link to="/details" className="dropdown-conent">{item.name} </Link>
  //           {/* <div className="dropdown-content"> */}
  //             <a className="dropdown-item d-none" href="#">Action</a>
  //             {/* <a className="dropdown-item" href="#">Another action</a>
  //             <a className="dropdown-item" href="#">Something else here</a> */}
  //           {/* </div>           */}
  //       </div>
  //     // </div>
  // );
  
render(){

  const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


  return (
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
  )
}
}

const HoverLink = styled.div`

`;