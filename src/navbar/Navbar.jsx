import React, { useContext, useEffect, useState } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import Storedata from "../Storedata";
import "../App.css";

const Navbar = () => {
  const { pokemonData, setPokemonData, fectData } = useContext(Storedata);
  const [pokeName, setPokeName] = useState("");
  const onChangeHandler = (e) => {
    setPokeName(e.target.value);
  };
  const getPokeData = (e) => {
    e.preventDefault();
    const newSearchPokemon = pokemonData.filter((item) => {
      if (pokeName === item.name) {
        return item.name;
      } else if (
        pokeName.slice(0).includes(pokeName.toLowerCase()) ===
        item.name.slice(0).includes(pokeName.toLowerCase())
      ) {
        return item.name;
      }
    });
    setPokemonData(newSearchPokemon);
  };

  const pokeChange = () => {
    setPokemonData([]);
    fectData();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="images/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ bsScrollHeight: "100px" }}
          >
            <li className="nav-item">
              <Link
                className="nav-link  fs-5"
                aria-current="page"
                to="/"
                onClick={pokeChange}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item me-3    ">
              <Link
                className="nav-link fs-5"
                to="/gallery"
                onClick={pokeChange}
              >
                Pokemon's Gallery
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChangeHandler}
            />
            <button
              className="btn btn-outline-danger"
              // type="submit"
              onClick={getPokeData}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
