import axios from "axios";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./navbar/Navbar";
import Singlepokemon from "./Singlepokemon/Singlepokemon";
import Storedata from "./Storedata";
import Gallery from "./Gallery/Gallery";

const App = () => {
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fectData();
  }, [url]);

  const fectData = async () => {
    let data = await axios.get(url);
    let nextLink = data.data.next;
    setNext(nextLink);
    let prevLink = data.data.previous;
    setPrev(prevLink);
    fetchUrl(data.data.results);
  };

  const fetchUrl = (data) => {
    data.map(async (item) => {
      let data2 = await axios.get(item.url);
      setPokemonData((old) => {
        old = [...old, data2.data];
        return old;
      });
    });
  };

  return (
    <Storedata.Provider
      value={{ pokemonData, setPokemonData, next, prev, setUrl, fectData }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepokemon/:id" element={<Singlepokemon />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </Storedata.Provider>
  );
};

export default App;
