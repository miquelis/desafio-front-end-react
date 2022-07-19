import React from "react";
import { render, screen } from "@testing-library/react";
import Pokedex from "./Pokedex";
import { IPokemonList } from "../../interfaces/pokemonList";

const listaPokemon = {
  count: 0,
  next: "",
  previous: "",
  results: [
    {
      name: "Não Listado",
      url: "",
    },
  ],
} as unknown as IPokemonList;

test("renders Pokédex link", () => {
  render(<Pokedex results={listaPokemon.results} />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
