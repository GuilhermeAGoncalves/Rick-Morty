import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import ListOfItems from "../../components/list-of-items/listOfItems.component";
import css from "./home.page.style.module.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Home() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character ");

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
    console.log(data);
  }, [url]);

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

  console.log(data);

  return (
    <>
      <Header />
      <ListOfItems data={data ? data.results : []} type="character" />
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

export default Home;
