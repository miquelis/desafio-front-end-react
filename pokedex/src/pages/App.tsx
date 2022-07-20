import React, { useEffect, useState } from "react";
import CountrySelect from "../components/atoms/autoCompleteImput";
import NavBar from "../components/molecules/NavBar";
import Pokedex from "./Home/Pokedex";
import "./App.css";
import { getAllPokemonList } from "../services/api";
import { IPokemonList } from "../interfaces/pokemonList";
import { StySection } from "./styles";
import { ILocalStorageObjeto } from "../interfaces/localStorage.pokemon";

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
  const [idPokemonSelecionado, setIdPokemonSelecionado] = useState({listaID: [0]});

  const carregarListaPokemon = async () => {
    setListaPokemon(await getAllPokemonList());
  };

  useEffect(() => {
    return () => {
      carregarListaPokemon();
    };
  }, []);

  useEffect(() => {
    const consultaLocalHistori = () => {
      const localStorageString = localStorage.getItem("pokemon_favorito");
      setIdPokemonSelecionado(
        JSON.parse(
          localStorageString === null ? '{"listaID":null}' : localStorageString
        ) as ILocalStorageObjeto
      );
    };
    return () => {
      consultaLocalHistori();
    };
  }, [setIdPokemonSelecionado]);

  return (
    <>
      {listaPokemon.count !== 0 ? (
        <>
          <NavBar />
          <CountrySelect results={listaPokemon.results} />
          <StySection>
            <Pokedex listaID={idPokemonSelecionado.listaID} />
          </StySection>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
