import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IPokemonList } from "../../interfaces/pokemonList";

const PokemonSelect: React.FC<IPokemonList> = ({
  results,
  previous,
  next,
  count,
}: IPokemonList) => {
  return (
    <Autocomplete
      id="pokemon-select"
      sx={{
        width: "100%",
        ".MuiOutlinedInput-root": {
            borderRadius: 50,
            borderColor: "azure",
            borderWidth: 10,
        },
      }}
      options={results}
      autoHighlight
      getOptionLabel={(option) => `${option.name} ${option.url.split("/")[6]}`}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="100"
            //certo seria receber o ID porem a API não fornece
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              option.url.split("/")[6]
            }.png`}
            alt=""
          />
          Nome: {option.name} | Código: {option.url.split("/")[6]}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          // color="info"
          {...params}
          label="Busque seu Pokémon"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          sx={{ backgroundColor: "#646975" }}
        />
      )}
    />
  );
};

export default PokemonSelect;
