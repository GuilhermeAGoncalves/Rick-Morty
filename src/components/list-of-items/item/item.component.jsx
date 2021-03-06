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
  episode,
  data,
}) {
  console.log(type);
  console.log(data);
  if (type === "location") {
    return (
      <div className={css.element__location}>
        <div className={css.element__location__info}>
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

  if (type === "episode") {
    return (
      <div className={css.element__location}>
        <div className={css.element__location__info}>
          <span>
            Nome:
            <h1>{name}</h1>
          </span>
          <span>
            Episodio:
            <p>{episode}</p>
          </span>
          <span>
            Data:
            <p>{data}</p>
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>não chegou</h1>
    </>
  );
}

export default Item;
