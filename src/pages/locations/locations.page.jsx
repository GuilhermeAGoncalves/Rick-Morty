import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import ListOfItems from "../../components/list of items/listOfItems.component";

function Locations() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/location");

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  console.log(data);

  return (
    <>
      <Header />
      <ListOfItems data={data ? data.results : []} type="location" />
    </>
  );
}

export default Locations;
