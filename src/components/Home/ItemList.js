import React from "react";
import Item from "./Item";

export default function ItemList({ value }) {
  const items = [
    {
      id: 1,
      icon: "fas fa-tshirt",
      name: "accessories",
      subcategories: [
        "Clothings",
        "Shoes",
        "Jewelries",
        "handbags/Wallets",
        "Accessories",
      ],
    },
    {
      id: 2,
      icon: "fas fa-medkit",
      name: "beauty",
      subcategories: [
        "Powder",
        "Mascara",
        "Eyeshadow",
        "Shampoo",
        "Wigs",
        "Cream",
        "Deodorants",
      ],
    },
    {
      id: 3,
      icon: "fas fa-clock",
      name: "jewelry",
      subcategories: [
        "Wrist watches",
        "Bracelets",
        "Necklaces"
      ],
    },
    {
      id: 4,
      icon: "fas fa-mobile",
      name: "phones",
      subcategories: [
        "Smartphones",
        "Basic Phones",
        "iPads",
        "Tablets",
        "Accessories",
      ],
    },
    {
      id: 5,
      icon: "fas fa-male",
      name: "men",
      subcategories: [
        "Shirts",
        "Hoodies",
        "Pajamas",
        "Boxers",
        "Robes",
        "Joggers",
        "Trousers"
      ],
    },
    {
      id: 6,
      icon: "fas fa-female",
      name: "women",
      subcategories: [
        "Tops",
        "Gowns",
        "Jumpsuits",
        "Blouses",
        "Hoodies",
        "Shirts"
      ],
    },
    {
      id: 7,
      icon: "fas fa-child",
      name: "kids",
      subcategories: ["Diapers", "Toys", "Feeds", "kids"],
    },
    {
      id: 8,
      icon: "fas fa-shopping-bag",
      name: "shoes",
      subcategories: ["Loafers", "mocasin", "sneakers", "ladies' shoes"],
    },
    {
      id: 9,
      icon: "fas fa-shopping-basket",
      name: "supermarket",
      subcategories: [
        "Drinks",
        "Grains",
        "Pasta",
        "Juices",
        "Cereals",
        "Noodles",
      ],
    },
    {
      id: 10,
      icon: "fas fa-futbol",
      name: "sporting goods",
      subcategories: [
        "Dumbells",
        "Trainers",
        "Ropes",
        "Nikes",
        "Treadmills",
        "Balls",
      ],
    },
    {
      id: 11,
      icon: "fas fa-home",
      name: "house",
      subcategories: ["Rugs", "Mats", "Pillows", "Jugs"],
    },
    {
      id: 12,
      icon: "fas fa-dot-circle",
      name: "other",
      subcategories: ["Books", "Movies", "Pets", "Musical", "Instruments"],
    },
  ];
  return (
    <div className="pl-3 ml-1 mt-1">
      {items.map((item) => {
        return <Item key={item.id} item={item} name={item.name}/>;
      })}
    </div>
  );
}
