import React from "react";
import Item from "./Item";

export default function ItemList({ value }) {
  const items = [
    { 
      id: 1, 
      icon:'fas fa-shopping-basket',
      name: "supermarket", 
      subcategories: ['Drinks', 'Grains', 'Pasta', 'Juices', 'Cereals', 'Noodles'] 
    },
    { 
      id: 2, 
      icon:'fas fa-medkit',
      name: "health & beauty",
      subcategories: ['Powder', 'Mascara', 'Eyeshadow', 'Shampoo', 'Wigs', 'Cream', 'Deodorants'] 
     },
    { 
      id: 3, 
      icon:'fas fa-home',
      name: "home & office",
      subcategories: ['Bath', 'Bedding', 'Home Decor', 'Cutleries', 'Microwave'] 
    },
    { 
      id: 4, 
      icon:'fas fa-mobile',
      name: "phones & tablets",
      subcategories: ['Smartphones', 'Basic Phones', 'iPads', 'Tablets', 'Accessories'] 
     },
    { 
      id: 5, 
      icon:'fas fa-laptop',
      name: "computing",
      subcategories: ['Desktops', 'Laptops', 'Printers', 'Scanners', 'Softwares', 'Accessories'] 
    },
    { 
      id: 6, 
      icon:'fas fa-tablet',
      name: "electronics",
      subcategories: ['Televisions', 'Home Theatre', 'Generators', 'DVDs', 'Other Appliances']
    },
    { 
      id: 7, 
      icon:'fas fa-tshirt',
      name: "fashion",
      subcategories: ['Clothings', 'Shoes', 'Jewelries', 'handbags/Wallets', 'Sport Wears']
     },
    { 
      id: 8, 
      icon:'fas fa-child',
      name: "baby products", 
      subcategories: ['Diapers', 'Toys', 'Feeds', 'Skin Care'] 
    },
    { 
      id: 9, 
      icon:'fas fa-gamepad',
      name: "gaming",
      subcategories: ['Playstations, Nintendoes, XBOX, Accessories'] 
    },
    { 
      id: 10, 
      icon:'fas fa-futbol',
      name: "sporting goods",
      subcategories: ['Dumbells', 'Trainers', 'Ropes', 'Nikes', 'Treadmills', 'Balls'] 
     },
    { 
      id: 11, 
      icon:'fas fa-car',
      name: "automobile",
      subcategories: ['Cars', 'Accessories'] 
    },
    { 
      id: 12, 
      icon:'fas fa-dot-circle',
      name: "other",
      subcategories: ['Books', 'Movies', 'Pets', 'Musical', 'Instruments'] 
    }
  ];
  return (
    <div className="pl-3 mt-1">
        {items.map(item => {
            return <Item key={item.id} item={item}
             />
        })}
    </div>
  );
}
