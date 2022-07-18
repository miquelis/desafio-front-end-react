import {combineReducers} from 'redux'
import PokedexListReducer from './PokedexListReducer'
import PokemonListReducer from './PokemonListReducer'
import PokemonMultipleReducer from './PokemonMultipleReducer'

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer,
    Pokedex: PokedexListReducer
})

export default RootReducer