import React from "react";
import Item from "./item/item.component";
import css from "./listOfItem.style.module.css";

function ListOfItems({ data, type }) {
  if (type === "location") {
    return (
      <div className={css.list}>
        {data.map((element) => (
          <Item
            key={element.id}
            name={element.name}
            dimension={element.dimension}
            typeLocations={element.type}
            type="location"
          />
        ))}
      </div>
    );
  }

  if (type === "character") {
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
            type="character"
          />
        ))}
      </div>
    );
  }

  console.log(data, type);

  if (type === "episodes") {
    return (
      <div className={css.list}>
        {data.map((element) => (
          <Item
            key={element.id}
            data={element.air_date}
            name={element.name}
            episode={element.episode}
            type="episode"
          />
        ))}
      </div>
    );
  }

  return <></>;
}

export default ListOfItems;
