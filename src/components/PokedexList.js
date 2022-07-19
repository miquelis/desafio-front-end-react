import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import { GetPokedexItemDeleted, GetPokedexList } from '../actions/pokemonActions'

const PokedexList = (props) => {
    const dispatch = useDispatch()
    const pokedexState = useSelector(state => state.Pokedex)

    React.useEffect(() => {
        if(pokedexState?.lengh){
            dispatch(GetPokedexList(pokedexState))
        }
    }, [dispatch, pokedexState])

    const handleDeleteItem = (itemID) => {
        dispatch(GetPokedexItemDeleted(itemID))
    }
    
    return (
        
        <div>
            <div className='pokedex-list-container'>
                {pokedexState.data.map(el =>
                    <div className='pokedex-item-content' key={el.id}>
                        <img height={100} src={el?.sprites.other['official-artwork'].front_default} alt=""/>
                        <div className='text'>
                            <p><strong>Nome:</strong> {el?.name}</p>
                            <p><strong>Peso:</strong> {el?.weight}</p>
                            <p><strong>Altura:</strong> {el?.height}</p>
                            {<p><strong>Slots: </strong> {el.types.length}</p>}
                            <h4>Tipotde slots:</h4>
                            {el.types.map((t, index) => (<p key={index}>{t.type.name}</p>))}
                            <h4>Habilidades:</h4>
                            {el.abilities.map((a, index) => <p key={index}>{a.ability.name}</p>)}
                            <h4>Estatísticas</h4>
                            {el.stats.map((st,index)=> <span key={index}>{st.stat.name} </span>)}
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