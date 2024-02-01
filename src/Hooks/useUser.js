import { useState, useEffect } from 'react';
import { GetDataUsersCarts } from '../Peticiones/axios';
import { userIdPruebas } from '../helpers/idUserPruebas'
import useProducts from './useProducts';
import { urlCarritos, urlUsuario } from '../helpers/urls';

function useUser() {
    const [user, setUser] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [productNumbers, setProductNumbers] = useState([]);
    const { data } = useProducts();
    const [datosC, setDatosC] = useState(false);
    const [userMain, setUserMain] = useState({
        "id": 1,
        "email": "plaga500@hotmail.com",
        "password": "colegio1",
        "cellphone": "301234565",
        "name": "Santiago",
        "last_name": "Buitrago",
        "id_carts": 1
    });

    useEffect(() => {
        async function fetchUserData() {
            try {
                
                const respUser = await GetDataUsersCarts(urlUsuario, userIdPruebas);
                setUser(respUser);

                const respCarts = await GetDataUsersCarts(urlCarritos, respUser.id_carts);
                const productIds = respCarts.id_products.split('|').map(product => product.split(':')[0].toString());
                const productNumbersa = respCarts.id_products
                    .split('|')
                    .map(product => product.split(':')[1]);
                setProductNumbers(Array.from(productNumbersa, Number));

                if (data) {
                    let productsInCartData = []

                    productIds.map(e => {
                        data.map(i => {
                            if (e  === i.id.toString()) {
                                productsInCartData.push(i)
                            }
                        })
                    })

                    setCartItems(productsInCartData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, [data, datosC]);

    return { user, cartItems, productNumbers, datosC, setDatosC, userMain, setUserMain };
}

export default useUser;