export const SET_ALBUM_LIST = "SET_ALBUM_LIST";
export const SET_PHOTO_LIST = "SET_PHOTO_LIST";
export const GET_ALBUM_LIST = "GET_ALBUM_LIST";
export const GET_PHOTO_LIST = "GET_PHOTO_LIST";
export const ADD_PHOTO_LIST = "ADD_PHOTO_LIST";
export const ADD_ALBUM_LIST = "ADD_ALBUM_LIST";

export const setAlbum = list => dispatch =>{
    dispatch({
        type: SET_ALBUM_LIST,
        payload: list
    })
};

export const addAlbum = album => dispatch =>{
    dispatch({
        type: ADD_ALBUM_LIST,
        payload: album
    })
};

export const setPhoto = list => dispatch =>{
    dispatch({
        type: SET_PHOTO_LIST,
        payload: list
    })
};

