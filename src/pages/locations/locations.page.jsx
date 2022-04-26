import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import ListOfItems from "../../components/list-of-items/listOfItems.component";
import css from "./locations.page.style.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Locations() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/location");

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  console.log(data);

  const proxPage = () => {
    if (data.info.next !== null) {
      setUrl(data.info.next);
      window.scroll(0, 0);
    }
  };

  const returnPage = () => {
    if (data.info.prev !== null) {
      setUrl(data.info.prev);
      window.scroll(0, 0);
    }
  };

  return (
    <>
      <Header />
      <ListOfItems data={data ? data.results : []} type="location" />
      <div className={css.buttons}>
        <button onClick={returnPage}>
          <AiOutlineArrowLeft /> Voltar
        </button>
        <button onClick={proxPage}>
          Mais <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}

export default Locations;
