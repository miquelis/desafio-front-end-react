import React, { useEffect, useState } from "react";
import CountrySelect from "../components/atoms/autoCompleteImput";
import NavBar from "../components/molecules/NavBar";
import Pokedex from "./Home/Pokedex";
import "./App.css";
import { getAllPokemonList } from "../services/api";
import { IPokemonList } from "../interfaces/pokemonList";
import { StySection } from "./styles";

function App() {
  const [listaPokemon, setListaPokemon] = useState({
    count: 0,
    next: "",
    previous: "",
    results: [
      {
        name: "Não Listado",
        url: "",
      },
    ],
  } as unknown as IPokemonList);

  const carregarListaPokemon = async () => {
    setListaPokemon(await getAllPokemonList());
  };

  useEffect(() => {
    return () => {
      carregarListaPokemon();
    };
  }, []);

  return (
    <>
      {listaPokemon.count !== 0 ? (
        <>
          <NavBar />
          <CountrySelect results={listaPokemon.results} />
          <StySection>
            <Pokedex results={listaPokemon.results} />
          </StySection>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
