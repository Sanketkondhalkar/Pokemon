import React, { useContext, useEffect } from "react";
import "../Gallery/Gallery.css";
import Storedata from "../Storedata";
import "../App.css";

const Gallery = () => {
  const { pokemonData, setPokemonData, next, prev, setUrl } =
    useContext(Storedata);

  // grass  water  flying  normal  bug  poison fire
  const changeColor = (names) => {
    if (names === "grass") {
      return "green";
    } else if (names === "water") {
      return "blue";
    } else if (names === "flying") {
      return "#A890F0";
    } else if (names === "normal") {
      return "red";
    } else if (names === "bug") {
      return "brown";
    } else if (names === "poison") {
      return "purple";
    } else if (names === "fire") {
      return "#FF7800";
    } else if (names === "electric") {
      return "yellow";
    } else if (names === "ground") {
      return "#C1BF36";
    } else if (names === "fairy") {
      return "#C920A0";
    } else if (names === "fighting") {
      return "#C03028";
    } else if (names === "rock") {
      return "#B8A038";
    } else if (names === "psychic") {
      return "#f96c96";
    } else if (names === "ghost") {
      return "#705898";
    } else if (names === "ice") {
      return "#98D8D8";
    } else if (names === "dragon") {
      return "#7038F8";
    } else if (names === "dark") {
      return "#705848";
    } else if (names === "steel") {
      return "#8585ad";
    }
  };

  // grass  water  flying  normal  bug  poison fire
  const getIcon = (names) => {
    switch (names) {
      case "grass":
        return <i className="fa-solid fa-leaf me-1"></i>;
      case "water":
        return <i className="fa-solid fa-droplet me-1"></i>;
      case "flying":
        return <i className="fa-sharp fa-solid fa-dove me-1"></i>;
      case "normal":
        return <i className="fa-solid fa-notes-medical me-1"></i>;
      case "bug":
        return <i className="fa-solid fa-bug me-1"></i>;
      case "poison":
        return <i className="fa-solid fa-skull-crossbones me-1"></i>;
      case "fire":
        return <i className="fa-sharp fa-solid fa-fire-flame-simple me-1"></i>;
      case "electric":
        return <i className="fa-sharp fa-solid fa-bolt me-1"></i>;
      case "ground":
        return <i className="fa-solid fa-road me-1"></i>;
      case "fighting":
        return <i className="fa-regular fa-swords me-1"></i>;
      default:
        return "";
    }
  };

  // grass  water  flying  normal  bug  poison fire
  const cardColor = (names) => {
    switch (names) {
      case "grass":
        return "#a6e6a1";
      case "water":
        return "#908cd1";
      case "flying":
        return "#8cd1cb";
      case "normal":
        return "#ff8080";
      case "bug":
        return "#FF8787";
      case "poison":
        return "#E788F3";
      case "fire":
        return "#e3a054";
      case "electric":
        return "#ffff99";
      case "ground":
        return "#E0C068";
      case "fairy":
        return "#E392D0";
      case "fighting":
        return "#C0828C";
      case "rock":
        return " #dbcc8a";
      case "psychic":
        return "#fb9db9";
      case "ghost":
        return "#bbaed0";
      case "ice":
        return "#c8eaea";
      case "dragon":
        return "#cbb6fc";
      case "dark":
        return "#cdbcb1";
      case "steel":
        return "#c2c2d6";
    }
  };

  const nextData = () => {
    setPokemonData([]);
    setUrl(next);
  };

  const previousData = () => {
    setPokemonData([]);
    setUrl(prev);
    if (prev === null) {
      console.log("first");
    }
  };

  return (
    <div
      className="container-fluid  mb-5"
      style={{ backgroundImage: 'url("images/pokeball.png")' }}
    >
      <div className="container mt-3">
        <div className="d-flex bd-highlight mb-3">
          <div className="me-auto p-2 bd-highlight">
            <button
              onClick={previousData}
              type="button"
              className="btn btn-danger"
            >
              Previous
            </button>
          </div>
          <div className="p-2 bd-highlight">
            <button onClick={nextData} type="button" className="btn btn-danger">
              Next
            </button>
          </div>
        </div>
        <div className="row">
          {pokemonData.map((item, index) => {
            return (
              <div className="col-4 mt-5 gallery-card-col4" key={index}>
                <div
                  className="card"
                  style={{
                    color: "white",
                    backgroundColor: cardColor(item.types[0].type.name),
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <div className="card-body">
                        <p style={{ lineHeight: "5px" }}>#{index + 1}</p>
                        <p className="gallery-card-pokename" style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {item.name}
                        </p>
                        {item.types.map((value, index) => {
                          return (
                            <button
                              type="button"
                              className=" btn-primary me-1 gallery-card-type-button"
                              key={index}
                              style={{
                                height: "22px",
                                fontSize: "10px",
                                borderRadius: "5px",
                                backgroundColor: changeColor(value.type.name),
                                border: "none",
                              }}
                            >
                              {getIcon(value.type.name)}
                              {value.type.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col" style={{ position: "relative" }}>
                      <div className="card-image ">
                        <img
                          className="gallery-card-col4-img"
                          src={item?.sprites?.other?.dream_world?.front_default}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
