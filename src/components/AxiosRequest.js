import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosRequest = () => {

    const [info, setInfo] = useState([]);

    useEffect( () => {
        axios
            .get( "https://users-crud1.herokuapp.com/users/" )
            .then( res => setInfo( res.data ) )
    }, [] )

    const reload = () => {
        axios
            .get( "https://users-crud1.herokuapp.com/users/" )
            .then( res => setInfo( res.data ) )
    }

    const addUser = (data) => {
        axios
			.post("https://users-crud1.herokuapp.com/users/", data)
			.then( () => reload() )
    }

    const updateUser = (id, data) => {
        axios
            .put(`https://users-crud1.herokuapp.com/users/${id}/`, data)
            .then( () => reload() )
    }

    const deleteUser = (id) => {
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then( () => reload() )
    }
    return [ info, addUser, updateUser, deleteUser];
}
 
export default AxiosRequest;