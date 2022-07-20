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
  const [idPokemonSelecionado, setIdPokemonSelecionado] = useState({
    listaID: [0],
  });
  const [idPokemonSelect, setIdPokemonSelect] = useState(0);

  const carregarListaPokemon = async () => {
    setListaPokemon(await getAllPokemonList());
  };

  useEffect(() => {
    return () => {
      carregarListaPokemon();
    };
  }, []);

  const consultaLocalHistori = () => {
    const localStorageString = localStorage.getItem("pokemon_favorito");
    setIdPokemonSelecionado(
      JSON.parse(
        localStorageString === null ? '{"listaID":null}' : localStorageString
      ) as ILocalStorageObjeto
    );
  };

  useEffect(() => {
    return () => {
      consultaLocalHistori();
    };
  }, [setIdPokemonSelecionado]);

  useEffect(() => {
    return () => {
      const adicionarPokemon = (id: number) => {
        if (id !== 0) {
          idPokemonSelecionado.listaID.push(id);
          setIdPokemonSelecionado(idPokemonSelecionado);
        }
      };
      adicionarPokemon(idPokemonSelect);
    };
  }, [idPokemonSelecionado, idPokemonSelect]);

  return (
    <>
      <NavBar />
      {listaPokemon.count !== 0 ? (
        <>
          <CountrySelect
            results={listaPokemon.results}
            setIdPokemonSelect={setIdPokemonSelect}
          />
        </>
      ) : (
        ""
      )}
      {idPokemonSelecionado.listaID[0] !== 0 ? (
        <>
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
