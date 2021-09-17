//CONST
const INITIAL_STATE = {
  list: []
}

const ADD_NEW_VIDEO = 'ADD_NEW_VIDEO'


//REDUCERS
export default function playlistReducers(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_NEW_VIDEO:
          return {...state, list: action.payload}

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
