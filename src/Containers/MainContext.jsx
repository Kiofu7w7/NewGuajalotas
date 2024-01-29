import React, { useState } from 'react'
import { UserContext } from '../Hooks/userContext';
import App from '../Router/App';

const MainContext = () => {
    const [user, setUser] = useState({
        "id": 1,
        "email": "plaga500@hotmail.com",
        "password": "colegio1",
        "cellphone": "301234565",
        "name": "Santiago",
        "last_name": "Buitrago",
        "id_carts": 1
    });

    console.log("Usuario actual", user)

    return (
        <div className='context'>
            <UserContext.Provider value={{ user, setUser }}>
                <App/>
            </UserContext.Provider>
        </div>
    )
}

export default MainContext