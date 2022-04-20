import React from "react";
import Item from "./item/item.component";
import css from "./listOfItem.style.module.css";

function ListOfItems({ data }) {
  return (
    <div className={css.list}>
      {data.map((element) => (
        <Item
          key={element.id}
          name={element.name}
          image={element.image}
          status={element.status}
          species={element.species}
          location={element.location.name}
        />
      ))}
    </div>
  );
}

export default ListOfItems;
