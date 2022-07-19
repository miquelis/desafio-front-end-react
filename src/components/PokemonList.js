import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokemoList } from '../actions/pokemonActions'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const PokemonList = (props) => {
    const [search, setSearch] = React.useState()

    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)

    const FetchData = (page = 1) => {
        dispatch(GetPokemoList(page))
    }

    React.useEffect(() => {
        FetchData(1)
    }, [])

    const ShowData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return pokemonList.data.map((el, index) => {
                return (
                    <div key={index} className='list-wrapper'>
                        <div className="pokemon-item">
                            <h4>{el.name}</h4>
                            <h4 className='details'><Link to={`/pokemons/${el.name}`}>Ver detalhes</Link></h4>
                        </div>
                    </div>
                )
            })
        }
        if (pokemonList.loading) {
            return <p>LOADING...</p>
        }
        if (pokemonList.errorMsg !== "") {
            return <p>{PokemonList.errorMsg}</p>
        }
        return <p>unable to get data</p>
    }

    return (
        <div>
            <div className='search-wrapper'>
                <p>Search:</p>
                <input type="text" onChange={e => setSearch(e.target.value)} />
                <button onClick={() => props.history.push(`/pokemons/${search}`)}>Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName={"pagination"}
                />
            )}
        </div>
    )
}

export default PokemonList