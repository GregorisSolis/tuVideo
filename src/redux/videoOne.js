//CONST
const INITIAL_STATE = {
  video: []
}

const INTO_VIDEO = 'INTO_VIDEO'

//REDUCERS

export default function videoOneReducers(state = INITIAL_STATE, action){
  switch(action.type){
    case INTO_VIDEO:
      return {...state, video: action.payload}
    default:
      return state
  }
}

//ACTIONS

export const intoVideo = (video) => (dispatch, getState) => {

  localStorage.setItem('videoOne', JSON.stringify(video))

  dispatch({
    type: INTO_VIDEO,
    payload: video
  })
}
