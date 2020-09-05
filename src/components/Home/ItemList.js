import React from "react";
import Item from "./Item";

export default function ItemList({ value }) {
  const items = [
    {id:1, name:'supermarket'},
    {id:2, name:'health & beauty'},
    {id:3, name:'home & office'},
    {id:4, name:'phones & tablets'},
    {id:5, name:'computing'},
    {id:6, name:'electronics'},
    {id:7, name:'fashion'},
    {id:8,name:'baby products'},
    {id:9, name:'gaming'},
    {id:10,name:'sporting goods'},
    {id:11,name:'automobile'},
    {id:12,name:'other'}
  ];
  return (
    <div className="pl-3 mt-1">
        {items.map(item => {
            return <Item key={item.id} name={item.name}
             />
        })}
    </div>
  );
}
