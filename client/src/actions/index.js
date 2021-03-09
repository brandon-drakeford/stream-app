import streams from '../apis/streams'
import history from '../history'
import { v4 as uuidv4 } from 'uuid';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM  
} from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

//Creates a new stream
export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth

    const id = uuidv4();
    const response = await streams.post('/streams', { ...formValues, id, userId })

    dispatch ({ type: CREATE_STREAM, payload: response.data })
    history.push('/')
} 

//Retrive all streams
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch ({ type: FETCH_STREAMS, payload: response.data })
}

//Retrieve a stream based on logged-in ID
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`streams/${id}`)

    dispatch ({ type: FETCH_STREAM, payload: response.data })
}

//Edit stream information when logged-in
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)
    
    dispatch ({ type: EDIT_STREAM, payload: response.data })
    history.push('/')
}

//Delete a stream from account
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch ({ type: DELETE_STREAM, payload: id })

    history.push('/')
}
