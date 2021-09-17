//CONST
const INITIAL_STATE = {
  displayValue: 'none'
}

const SET_DISPLAY_FLEX = 'SET_DISPLAY_FLEX'
const SET_DISPLAY_NONE = 'SET_DISPLAY_NONE'

//REDUCERS
export default function showListReducers(state = INITIAL_STATE, action){
  switch(action.type) {
    case SET_DISPLAY_FLEX:
        return { ...state, displayValue: action.payload}
    case SET_DISPLAY_NONE:
        return { ...state, displayValue: action.payload}
    default:
        return state

  }
}


//ACTIONS
export const setDisplayFlex = () => (dispatch, getState) => {
  dispatch({
    type: SET_DISPLAY_FLEX,
    payload: 'initial'
  })
}

export const setDisplayNone = () => (dispatch, getState) => {
  dispatch({
    type: SET_DISPLAY_NONE,
    payload: 'none'
  })
}
