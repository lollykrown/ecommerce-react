import React from "react";
import Item from "./Item";

export default function ItemList({ value }) {
  const items = [
    {id:1, icon:'fas fa-shopping-basket',name:'supermarket'},
    {id:2, icon:'fas fa-medkit',  name:'health & beauty'},
    {id:3, icon:'fas fa-home', name:'home & office'},
    {id:4, icon:'fas fa-mobile', name:'phones & tablets'},
    {id:5, icon:'fas fa-laptop', name:'computing'},
    {id:6, icon:'fas fa-tablet', name:'electronics'},
    {id:7, icon:'fas fa-tshirt', name:'fashion'},
    {id:8, icon:'fas fa-child', name:'baby products'},
    {id:9, icon:'fas fa-gamepad', name:'gaming'},
    {id:10,icon:'fas fa-futbol', name:'sporting goods'},
    {id:11,icon:'fas fa-car', name:'automobile'},
    {id:12,icon:'fas fa-dot-circle', name:'other'}
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
