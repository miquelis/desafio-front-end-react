import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokedexItemDeleted, GetPokedexList } from '../actions/pokemonActions'

const PokedexList = (props) => {
    const dispatch = useDispatch()
    const pokedexState = useSelector(state => {
        console.log('ssss',state);
        return state.Pokedex})

    React.useEffect(() => {
        if(pokedexState?.lengh){
            dispatch(GetPokedexList(pokedexState))
        }
    }, [dispatch, pokedexState])
    
    console.log(pokedexState);

    const handleDeleteItem = (itemID) => {
        dispatch(GetPokedexItemDeleted(itemID))
        console.log(itemID);
    }
    
    return (
        
        <div>
            <div className='pokedex-list-container'>
                {pokedexState.data.map(el =>
                    <div className='pokedex-item-content' key={el.name}>
                        <img height={100} src={el?.sprites.other['official-artwork'].front_default} />
                       <div className='text'>
                            <p><strong>Nome:</strong> {el?.name}</p>
                            <p><strong>Peso:</strong> {el?.weight}</p>
                            <p><strong>Altura:</strong> {el?.height}</p>
                            {<p><strong>Slots: </strong> {el.types.length}</p>}
                            <h4>Tipotde slots:</h4>
                            {el.types.map(t => (<p>{t.type.name}</p>))}
                            <h4>Habilidades:</h4>
                            {el.abilities.map(a => <p>{a.ability.name}</p>)}
                            <h4>Estatísticas</h4>
                            {el.stats.map(st => <span>{st.stat.name} </span>)}
                            <p className='delete-button'>
                                <button className='danger' onClick={() => handleDeleteItem(el.id)}>Excluir</button>
                            </p>  
                       </div>
                    </div>  
                )}
            </div>
        </div>
    )
}

export default PokedexList