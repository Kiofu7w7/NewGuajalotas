import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AgregarItemCarrito, GetData } from '../Peticiones/axios';
import { urlComida } from '../helpers/urls';
import { BotonAgregarCarrito, ContenedorItemsExtra, DivBotonAgregarCarrito, DivContadorCart, DivItemsExtra, DivSabores, DivTituloPrecio, ParrafoTitulo, PrecioDeDetails, TextoItemsExtra, TituloDeDetails, Titulos } from '../Components/StyleComponentsDetails';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import useProducts from '../Hooks/useProducts';
import { UserContext } from '../Hooks/userContext';

function DetailsProduct() {

    const { id } = useParams();
    const {data} = useProducts();
    const { user } = useContext(UserContext)
    const [dataProduct, setDataProduct] = useState();
    const [total, setTotal] = useState(0)
    const [contCarrito, setContCarrito] = useState(1);
    const [extraItems, setExtraItems] = useState([]);     //selectedItems es la informacion de los productos extras seleccionados
    
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await GetData(`${urlComida}/${id}`);
                setDataProduct(resp);
            } catch (error) {
                console.error("Error fetching data or calculating total:", error);
            }
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        setTotal(dataProduct?.precio)
    }, [dataProduct])

    //CONTADOR CANTIDAD

    const handlePlusCarrito = () => {
    setContCarrito(contCarrito + 1)
    setTotal(total + dataProduct?.precio)
    }

    const handleMinusCarrito = () => {
    if(contCarrito !== 1){
        setContCarrito(contCarrito - 1);
        setTotal(total - dataProduct?.precio)
    }
    };

    //extras

    const handleClick = (item) => {
        setExtraItems((prevSelectedItems) => {
            const updatedSelectedItems = prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item)
                : [...prevSelectedItems, item];

            setTotal((prevTotal) =>
                prevSelectedItems.includes(item)
                    ? prevTotal - item.precio 
                    : prevTotal + item.precio 
            );

            return updatedSelectedItems;
        });
    };

    //PETICIONES PARA AGREGAR AL CARRITO

    const handleComprar = async () => {
        try {
            await enviarProducto(dataProduct.id, contCarrito);
            if (extraItems) {
                await Promise.all(
                    extraItems.map(async (item) => {
                        await enviarProducto(item.id, 1);
                    })
                );
            }
            navigate("/")
        } catch (error) {
            throw error
        }
    };

    const enviarProducto = async (pId, pCant) => {
        try {
            await AgregarItemCarrito(user.id_carts, pId, pCant);
        } catch (error) {
            throw error; 
        }
    };

    return (
        <div>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <img onClick={() => {navigate("/")}} style={{width: 24,height: 24, objectFit: "contain", cursor: "pointer"}} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705706634/Guajolota/chevron-left_piq1vb.png' alt=''></img>
                <img style={{width: 165.833, height: 155.865, objectFit: "contain"}} src={dataProduct?.imagen} alt=''></img>
                <img onClick={() => {navigate("/cart")}} style={{width: 24 ,height: 24, objectFit: "contain", cursor: "pointer"}} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png' alt=''></img>
            </div>
            <DivTituloPrecio>
                <TituloDeDetails>{dataProduct?.nombre_completo}</TituloDeDetails>
                <PrecioDeDetails>${dataProduct?.precio} MXN</PrecioDeDetails>
            </DivTituloPrecio>
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: 32}}>
                <DivContadorCart>
                    <MinusCircleOutlined onClick={() => handleMinusCarrito()} />
                    <h3 style={{ margin: 0 }}>{contCarrito}</h3>
                    <PlusCircleOutlined onClick={() => handlePlusCarrito()} />
                </DivContadorCart>
            </div>
            <Titulos style={{marginBottom: 24}}>Sabor</Titulos>
            <div>
                <DivSabores>
                    {data?.filter((item) => item?.categoria === dataProduct?.categoria).map(
                        (item, index) => {
                        const opacity = item.id === dataProduct.id ? 1 : 0.2;
                                return (
                                    <img
                                    style={{ cursor: "pointer", width: 64, height: 69, opacity }}
                                    alt=""
                                    src={item.sabor_imagen}
                                    key={index}
                                    onClick={() => {
                                        setContCarrito(1);
                                        setExtraItems([]);
                                        navigate(`/datails-products/${item.id}`)
                                    }}
                                    />
                                );
                        }
                    )}
                </DivSabores>
            </div>
            <div style={{marginTop: 40}}>
                {dataProduct?.categoria === "guajolotas" && (
                    <div>
                        <Titulos>Guajolocombo</Titulos>
                        <ParrafoTitulo>Selecciona la bebida que más te guste y disfruta de tu desayuno.</ParrafoTitulo>
                    </div>
                    
                )}
                {dataProduct?.categoria === "bebidas" && (
                    <div>
                        <Titulos>Guajolocombo</Titulos>
                        <ParrafoTitulo>Selecciona la torta que más te guste y disfruta de tu desayuno.</ParrafoTitulo>
                    </div>
                )}
                {dataProduct?.categoria === "tamales" && (
                    <div>
                        <Titulos style={{marginBottom: 8}}>Bebidas</Titulos>
                        <ParrafoTitulo>Selecciona la bebida que más te guste y disfruta de tu desayuno.</ParrafoTitulo>
                    </div>
                )}
            </div>
            <ContenedorItemsExtra style={{marginBottom: 75}}>
                {
                    dataProduct?.categoria === "guajolotas" || dataProduct?.categoria === "tamales" ? (
                        data?.map((item, index) => {
                            if (item.categoria === 'bebidas'){
                                return (
                                    <DivItemsExtra  onClick={() => handleClick(item)} key={index}>
                                        <div style={{display: "flex", width: "100%" ,justifyContent: "space-between"}}>
                                            <img src={item.imagen} style={{width: 64, height: 64, objectFit: "contain"}} alt=''></img>
                                            <img
                                                src={extraItems.includes(item)
                                                ? 'https://res.cloudinary.com/dlwr6vxib/image/upload/v1705788000/Guajolota/check-square_fosngl.png'
                                                : 'https://res.cloudinary.com/dlwr6vxib/image/upload/v1705788000/Guajolota/square_zy5mzl.png'}
                                                style={{ width: 24, height: 24 }}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <TextoItemsExtra>{item.nombre}</TextoItemsExtra>
                                            <TextoItemsExtra style={{color: "#FA4A0C"}}>+ ${item.precio} MXN</TextoItemsExtra>
                                        </div>
                                    </DivItemsExtra>
                                );
                            }
                            return null;
                        })
                    ) : (
                        data?.map((item, index) => {
                            if (item.categoria === 'tamales'){
                                return (
                                    <DivItemsExtra  onClick={() => handleClick(item)} key={index}>
                                        <div style={{display: "flex", width: "100%" ,justifyContent: "space-between"}}>
                                            <img src={item.imagen} style={{width: 64, height: 64, objectFit: "contain"}} alt=''></img>
                                            <img
                                                src={extraItems.includes(item)
                                                ? 'https://res.cloudinary.com/dlwr6vxib/image/upload/v1705788000/Guajolota/check-square_fosngl.png'
                                                : 'https://res.cloudinary.com/dlwr6vxib/image/upload/v1705788000/Guajolota/square_zy5mzl.png'}
                                                style={{ width: 24, height: 24 }}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <TextoItemsExtra>{item.nombre}</TextoItemsExtra>
                                            <TextoItemsExtra style={{color: "#FA4A0C"}}>+ ${item.precio} MXN</TextoItemsExtra>
                                        </div>
                                    </DivItemsExtra>
                                );
                            }
                            return null;
                        })
                    )
                }
            </ContenedorItemsExtra>
            <DivBotonAgregarCarrito onClick={() => {handleComprar()}}>
                <BotonAgregarCarrito>
                    <p style={{ margin: 0 }}>Agregar {contCarrito} al carrito</p>
                    <p style={{ margin: 0 }}>
                        ${total}.00
                    </p>
                </BotonAgregarCarrito>
            </DivBotonAgregarCarrito>
        </div>
    )
}

export default DetailsProduct