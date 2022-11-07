import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Singlepokemon/Singlepokemon.css";

const Singlepokemon = () => {
  const { id } = useParams();
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [typeName, setTypeName] = useState([]);
  const [imageOverRide, setImageOverRide] = useState();

  // console.log(singlePokemon?.sprites?.other?.dream_world?.front_default);

  useEffect(() => {
    FetchSinglePokemonData();
  }, []);

  const FetchSinglePokemonData = async () => {
    let data3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    setSinglePokemon(data3.data);
    setTypeName(data3.data.types);
    setImageOverRide(data3?.data?.sprites?.other?.dream_world?.front_default);
  };

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

  const changeImage = (data) => {
    setImageOverRide(data);
  };

  // const changeImage2 = (data) => {
  //   setImageOverRide(data);
  // };

  // const changeImage3 = (data) => {
  //   setImageOverRide(data);
  // };
  return (
    <div className="container">
      <div
        className="card card-main"
        style={{
          backgroundColor: cardColor(typeName[0]?.type?.name),
          borderRadius: "10px",
        }}
      >
        <div className="card-body">
          <div className="row">
            <img
              src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png"
              alt=""
              style={{
                height: "100px",
                width: "260px",
                margin: "-60px auto",
              }}
            />
          </div>
          <div className="row mt-5">
            <div className="col  text-center">
              <div className="card-button mt-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "60%" }}
                >
                  Category : Mouse
                </button>
              </div>
              <div className="card-button mt-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "60%" }}
                >
                  Evolves to : Raichu
                </button>
              </div>
              <div className="card-button mt-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "60%" }}
                >
                  Weekness : Ground
                </button>
              </div>
            </div>
            <div className="col  text-center">
              <h1
                className="mt-4"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  color: "white",
                }}
              >
                {singlePokemon.name}
              </h1>
              <img
                className="mt-5 main-center-image "
                src={imageOverRide}
                alt=""
                style={{
                  width: "100%",
                  height: "250px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              {typeName.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="ms-3 mt-3  "
                    style={{
                      color: "white",
                      height: "40px",
                      fontSize: "20px",
                      borderRadius: "5px",
                      backgroundColor: changeColor(item.type.name),
                      border: "none",
                    }}
                  >
                    {item.type.name}
                  </button>
                );
              })}
            </div>
            <div className="col  text-center ">
              <div
                className="card card-images"
                style={{ width: "180px", height: "130px", margin: "0px auto" }}
              >
                <img
                  src={singlePokemon?.sprites?.other?.home?.front_default}
                  className="card-img-top"
                  alt="..."
                  onClick={() =>
                    changeImage(
                      singlePokemon?.sprites?.other?.home?.front_default
                    )
                  }
                />
              </div>
              <div
                className="card card-images mt-3"
                style={{ width: "180px", height: "130px", margin: "0px auto" }}
              >
                <img
                  src={singlePokemon?.sprites?.other?.home?.front_shiny}
                  className="card-img-top"
                  alt="..."
                  onClick={() =>
                    changeImage(
                      singlePokemon?.sprites?.other?.home?.front_shiny
                    )
                  }
                />
              </div>
              <div
                className="card card-images mt-3"
                style={{ width: "180px", height: "130px", margin: "0px auto" }}
              >
                <img
                  src={
                    singlePokemon?.sprites?.other?.["official-artwork"]?.[
                      "front_default"
                    ]
                  }
                  className="card-img-top"
                  alt="..."
                  onClick={() =>
                    changeImage(
                      singlePokemon?.sprites?.other?.["official-artwork"]?.[
                        "front_default"
                      ]
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepokemon;

// <div
//   className="container-fluid  mb-5"
//   style={{ backgroundImage: 'url("images/pokeball.png")' }}
// >
//   <img
//     style={{
//       height: "200px",
//     }}
//     src={singlePokemon?.sprites?.other?.dream_world?.front_default}
//     alt=""
//   />
//   <h4>name : {singlePokemon.name}</h4>
//   {typeName.map((item, index) => {
//     return (
//       <button
//         key={index}
//         className="ms-3"
//         style={{
//           color: "white",
//           height: "40px",
//           fontSize: "20px",
//           borderRadius: "5px",
//           backgroundColor: changeColor(item.type.name),
//           border: "none",
//         }}
//       >
//         {item.type.name}
//       </button>
//     );
//   })}
// </div>
