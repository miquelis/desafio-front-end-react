import React, { useEffect, useState } from "react";
import CountrySelect from "../components/atoms/autoCompleteImput";
import NavBar from "../components/molecules/NavBar";
import Home from "./Home/Home";
import "./App.css";
import { getAllPokemonList } from "../services/api";
import { IPokemonList } from "../interfaces/pokemonList";

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
    carregarListaPokemon();
  }, []);

  return (
    <>
      <NavBar />
      <CountrySelect results={listaPokemon.results} />
      <Home />
    </>
  );
}

export default App;
