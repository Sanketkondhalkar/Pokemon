import React, { useContext } from "react";
import "../Home/Home.css";
import Storedata from "../Storedata";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  let { pokemonData, setPokemonData, next, prev, setUrl } =
    useContext(Storedata);
  const nextData = () => {
    setPokemonData([]);
    setUrl(next);
  };

  const previousData = () => {
    setPokemonData([]);
    setUrl(prev);
  };

  const pokemonInfo = (id) => {
    // console.log(id);
  };

  return (
    <div className="container">
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
          {
            return (
              <div className="col-3 home-card-col3" key={index}>
                <div
                  className="card text-center mt-3 mb-5  "
                  style={{ width: "15rem" }}
                >
                  <h4 className="card-title">{item.name}</h4>
                  <h6>#{index + 1}</h6>
                  <img
                    src={item?.sprites?.other?.dream_world?.front_default}
                    className="card-img-top "
                    alt="..."
                  />
                  <div className="card-body">
                    <Link to={`/singlepokemon/${item.id}`}>
                      <button
                        onClick={() => pokemonInfo(item.id)}
                        type="button"
                        className="btn-danger"
                      >
                        Pokemon Information
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
