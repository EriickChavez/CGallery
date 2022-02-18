import {combineReducers} from "redux";
import {SET_ALBUM_LIST, SET_PHOTO_LIST, ADD_ALBUM_LIST} from "./actions";

const initialStates = {
    albums: [],
    photos: []
}


export const photosReducer = (state = initialStates, action) => {
    switch (action.type) {
        case SET_ALBUM_LIST:
            return {...state, albums: action.payload};
        case SET_PHOTO_LIST:
            return {...state, photos: action.payload};
        case ADD_ALBUM_LIST:
            const albums = [...state.albums]
            albums.push(action.payload)
            return {...state, albums}
        default: return initialStates;
    }
}

export default combineReducers({
    photos: photosReducer
})