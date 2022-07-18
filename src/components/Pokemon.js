import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GetPokedexList, GetPokemon } from '../actions/pokemonActions'

import _ from 'lodash'

const Pokemon = (props) => {

    const {match} = props
    const pokemonName = match.params.pokemon
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    React.useState(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]
            
            return (
                <div className='container'>
                    <img className='pokemon-img' src={pokeData.sprites.other['official-artwork'].front_default} alt=''/>
                    <div className='item'>
                        <img src={pokeData.sprites.front_default} alt=''/>
                        <img src={pokeData.sprites.back_default} alt=''/>
                        <img src={pokeData.sprites.front_shiny} alt=''/>
                        <img src={pokeData.sprites.back_shiny} alt=''/>
                    </div>
                </div>
            )
        }

        if (pokemonState.loading) {
            return <p>LOADING...</p>
        }

        if (pokemonState.errorMsg !== '') {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>Error get pokemon</p>

    }
    

    const hendleAddInPokedex = (itemList) => {
        dispatch(GetPokedexList(itemList))
    }

    return (
        <div className='content'>
            <h1> {pokemonName} </h1>
            {ShowData()}
            <button className='success' onClick={() => hendleAddInPokedex(pokemonState.data[pokemonName])}>Adicionar a Pokedex</button>
        </div>
    )
}

export default Pokemon