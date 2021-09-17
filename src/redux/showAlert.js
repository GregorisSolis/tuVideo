//CONST
const INITIAL_STATE = {
  alertValue: 'none'
}

const SET_SHOW = 'SET_SHOW'
const SET_NOT_SHOW = 'SET_NOT_SHOW'

//REDUCERS
export default function showAlertReducers(state = INITIAL_STATE, action){
  switch(action.type) {
    case SET_SHOW:
        return { ...state, alertValue: action.payload}
    case SET_NOT_SHOW:
        return { ...state, alertValue: action.payload}
    default:
        return state

  }
}


//ACTIONS
export const setShow = () => (dispatch, getState) => {
  dispatch({
    type: SET_SHOW,
    payload: 'flex'
  })
}

export const setNotShow = () => (dispatch, getState) => {
  dispatch({
    type: SET_NOT_SHOW,
    payload: 'none'
  })
}
