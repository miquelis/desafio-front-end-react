import React from "react";
import RecipeReviewCard from "../../components/atoms/Card/pokemon";
import { IPokemonList } from "../../interfaces/pokemonList";
import "./Pokedex.css";

const Pokedex: React.FC<IPokemonList> = ({
  results,
  previous,
  next,
  count,
}: IPokemonList) => {
  return (
    <>
      {results.map((result, index) => {
        return (
          <RecipeReviewCard
            key={result.name + index}
            name={result.name}
            url={result.url}
          />
        );
      })}
    </>
  );
};

export default Pokedex;
