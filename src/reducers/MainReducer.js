

const INITIAL_STATE= {
    'graph_data': [],
    'isLoading': true,
    'capital': 'isLoading',
    'table_data': []

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GRAPH_DATA_SUCCESS':
            return {
                ...state,
                graph_data: action.payload,
                isLoading: false
            };
        case 'CAPITAL_DATA_SUCCESS':
            return {
                ...state,
                capital: action.payload,
                isLoading: false
            };    
        case 'POSITION_DATA_SUCCESS':
            return {
                ...state,
                table_data: action.payload,
                isLoading: false
            };    
        default:
            return state;
    }
};