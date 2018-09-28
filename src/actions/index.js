import axios from 'axios';

const GRAPH_END_POINT = 'https://y79fxzsn5d.execute-api.ap-south-1.amazonaws.com/dev/graph'
const CAPITAL_END_POINT = 'https://y79fxzsn5d.execute-api.ap-south-1.amazonaws.com/dev/capital'
const POSITION_END_POINT = 'https://y79fxzsn5d.execute-api.ap-south-1.amazonaws.com/dev/positions'

export const summaryGraphData = () => {
    console.log('Inside Summary Graph Data')
    return (dispatch) => {
        axios.get(GRAPH_END_POINT
            ).then(function(response) {
                console.log(response.data)
                dispatch({
                    type: 'GRAPH_DATA_SUCCESS',
                    payload: response.data
                })
            }).catch(function(error){
                console.log(error)
            });
    }
}

export const getCapitalData = () => {
    return (dispatch) => {
        axios.get(CAPITAL_END_POINT
            ).then(function(response) {
                console.log(response.data)
                dispatch({
                    type: 'CAPITAL_DATA_SUCCESS',
                    payload: response.data
                })
            }).catch(function(error){
                console.log(error)
            });
    }
}

export const getTableData = () => {
    return (dispatch) => {
        axios.get(POSITION_END_POINT
            ).then(function(response) {
                console.log(response.data)
                dispatch({
                    type: 'POSITION_DATA_SUCCESS',
                    payload: response.data
                })
            }).catch(function(error){
                console.log(error)
            });
    }
}