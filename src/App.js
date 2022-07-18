import React from 'react'
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';
import PokedexList from './components/PokedexList';


function App() {
  return (
    <div className="App">
    <nav>
      <NavLink to='/'>Pokedex</NavLink>
      <NavLink to='/pokemons'>Search</NavLink>
    </nav>
     <Switch>
        <Route path='/' exact component={PokedexList} />
        <Route path='/pokemons' exact component={PokemonList} />
        <Route path='/pokemons/:pokemon' component={Pokemon}/>
     </Switch>

    </div>
  );
}

export default App;
