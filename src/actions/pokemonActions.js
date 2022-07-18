import axios from 'axios'
import Store from './../store/Store'

export const GetPokemoList = (page) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING",
        })

        const perPage = 15
        const offset = (page * perPage) - perPage

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL"
        })
    }
}

export const GetPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING",
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL"
        })
    }
}

export const GetPokedexList = (itemList) => async dispatch => {
    try {
        dispatch({
            type: "POKEDEX_LIST_LOADING",
        })

       dispatch({
            type: "POKEDEX_LIST_SUCCESS",
            payload: itemList,
        })
    } catch (e) {
        dispatch({
            type: "POKEDEX_LIST_FAIL"
        })
    }
}

export const GetPokedexItemDeleted = (itemDeleted) => async dispatch => {
    console.log('NAME',itemDeleted);
    const statePokedex = Store.getState().Pokedex.data

    console.log(statePokedex);
    try {
        dispatch({
            type: "POKEDEX_DELETE_LOADING",
        })

       dispatch({
            type: "POKEDEX_DELETE_SUCCESS",
            payload: statePokedex.filter(({id}) => {
                console.log( itemDeleted === id)
                return itemDeleted !== id
            }),
        })
    } catch (e) {
        console.log(e);
        dispatch({
            type: "POKEDEX_DELETE_FAIL"
        })
    }
}