import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import css from "./episodes.page.style.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import ListOfItems from "../../components/list-of-items/listOfItems.component";

function Episodes() {
  const [data, setData] = useState();
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode");

  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data));
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
      <ListOfItems data={data ? data.results : []} type="episodes" />
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

export default Episodes;
