import React from "react";
import css from "./item.style.module.css";

function Item({
  name,
  image,
  status,
  species,
  location,
  dimension,
  type,
  typeLocations,
}) {
  if (type === "location") {
    return (
      <div className={css.element}>
        <div className={css.element__info}>
          <span>
            Nome: <h1>{name}</h1>
          </span>
          <span>
            Dimensão: <p>{dimension}</p>
          </span>

          <span>
            Tipo: <p>{typeLocations}</p>
          </span>
        </div>
      </div>
    );
  }
  if (type === "character") {
    return (
      <div className={css.element}>
        <img src={image} alt={name} />
        <div className={css.element__info}>
          <span>
            Nome:
            <h1>{name}</h1>
          </span>
          <span>
            Status:
            <p className={status === "Alive" ? css.alive : css.death}>
              <span>{status}</span> - {species}
            </p>
          </span>
          <span>
            Localização:
            <p>{location}</p>
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>asda</h1>
    </>
  );
}

export default Item;
