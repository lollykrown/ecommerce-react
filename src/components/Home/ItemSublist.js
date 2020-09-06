import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemSublist({ item }) {
  const arr = [
    { 
      id: 1, name: "supermarket", 
      subcategories: ['Drinks, Grains, Pasta, Juices, Cereals, Noodles'] 
  },
    { 
      id: 2, 
      name: "health & beauty",
      subcategories: ['Powder, Mascara, Eyeshadow, Shampoo, Wigs, Cream, Deodorants'] 
     },
    { 
      id: 3, 
      name: "home & office",
      subcategories: ['Bath, Bedding, Home Decor, Cutleries, Microwave'] 
    },
    { 
      id: 4, 
      name: "phones & tablets",
      subcategories: ['Smartphones, Basic Phones, iPads, Tablets, Accessories'] 
     },
    { 
      id: 5, 
      name: "computing",
      subcategories: ['Desktops, Laptops, Printers Scanners, Softwares, Accessories'] 
    },
    { 
      id: 6, 
      name: "electronics",
      subcategories: ['Televisions, Home Theatre, Generators, DVDs, Other Appliances']
    },
    { 
      id: 7, 
      name: "fashion",
      subcategories: ['Clothings, Shoes, Jewelries, handbags/Wallets, Sport Wears']
     },
    { 
      id: 8, 
      name: "baby products", 
      subcategories: ['Diapers, Toys, Feeds, Skin Care'] 
    },
    { 
      id: 9, 
      name: "gaming",
      subcategories: ['Playstations, Nintendoes, XBOX, Accessories'] 
    },
    { 
      id: 10, 
      name: "sporting goods",
      subcategories: ['Dumbells, Trainers, Ropes, Nikes, Treadmills, Balls'] 
     },
    { 
      id: 11, 
      name: "automobile",
      subcategories: ['Cars, Accessories'] 
    },
    { 
      id: 12, 
      iconname: "other",
      subcategories: ['Books, Movies, Pets, Musical Instruments'] 
    }
  ];
  return (
    <Link className="dropdown-item d-none" href="#">
      Action
    </Link>
  );
}
