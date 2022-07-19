import axios from "axios";
import { IPokemonList } from "../interfaces/pokemonList";

const baseAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

const getAllPokemonList = async () => {
  return await baseAxios
    .get("/pokemon/?offset=1&limit=100000")
    .then((resultado) => {
      const DadosResultado = resultado?.data as IPokemonList;
      return DadosResultado;
    })
    .catch((erro) => {
      console.error(erro);
      return {
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
    });
};

export { getAllPokemonList };
