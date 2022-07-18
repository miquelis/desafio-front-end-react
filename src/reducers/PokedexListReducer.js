const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
}

const PokedexListReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case "POKEDEX_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        case "POKEDEX_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: 'unable to get pokedex'
            };
        case "POKEDEX_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                errorMsg: '',
            };
        case "POKEDEX_DELETE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: '',
            };
        default: 
        return state
    }
}

export default PokedexListReducer