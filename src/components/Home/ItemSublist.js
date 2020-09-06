import React from "react";
import { Link } from "react-router-dom";

export default function ItemSublist({ subcategory }) {
  return (
    <Link to="/products" className="dropdown-item" href="#">
      {subcategory}
    </Link>
  );
}
