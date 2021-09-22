//CONST
const INITIAL_STATE = {
  list: [],
  watchNow: 0
}

const ADD_NEW_VIDEO = 'ADD_NEW_VIDEO'
const CLEAR_LIST = 'CLEAR_LIST'
const WATCHNOW_ADD  = 'WATCHNOW_ADD'


//REDUCERS
export default function playlistReducers(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_NEW_VIDEO:
          return {...state, list: action.payload}
        case CLEAR_LIST:
          return {...state, list: action.payload, watchNow: 0}
        case WATCHNOW_ADD:
          return {...state, watchNow: action.payload}
        default:
        return state
    }
}


//ACTIONS
export const addVideoAction = (video) => (dispatch, getState) => {

    const { list } = getState().playlist
    list.push(video)

    dispatch({
      type: ADD_NEW_VIDEO,
      payload: list
    })
}

export const clearList = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_LIST,
    payload: []
  })
}

export const plusVideo = (num) => (dispatch, getState) => {

  dispatch({
    type: WATCHNOW_ADD,
    payload: num - 1
  })
}
