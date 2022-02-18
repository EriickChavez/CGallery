import {useEffect, useState} from 'react';
import {ALBUMS_URL} from '../constants/urls';

export default useFetch = () => {
    const fetchOptions = {method: "GET", headers: {'Content-Type': 'application/json'}}
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const _fetch = async () => {
            const response = await fetch(ALBUMS_URL, fetchOptions);
            const res = await response.json()
            setAlbums(res)
        }

        _fetch()
    }, [])


    return {albums}
}

