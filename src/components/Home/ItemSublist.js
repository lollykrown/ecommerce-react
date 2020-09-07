import React from "react";
import { Link } from "react-router-dom";

export default function ItemSublist({ name, subcategory }) {
  return (
    // <Link to={`/${subcategory}`} className="dropdown-item" href="#">
    <Link to={`/${name}`} className="dropdown-item" href="#">
      {subcategory}
    </Link>
  );
}
