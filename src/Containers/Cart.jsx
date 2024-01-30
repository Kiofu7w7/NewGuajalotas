import React, { useContext, useState } from 'react'
import useUser from '../Hooks/useUser'
import { useNavigate } from 'react-router-dom';
import { ButtonAS, CartItemText, CartPriceText, CartTotalDiv, DivButtonAS, DivContadorCart, ImagenProducto, NoCartItemsIcon, TextButtonAS, TitlePages } from '../Components/StyleComponentsCart';
import { Button, Modal } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { AgregarItemCarrito, EliminarItemCarrito } from '../Peticiones/axios';
import { UserContext } from '../Hooks/userContext';

function Cart() {

    const { cartItems, productNumbers } = useUser();
    const { user } = useContext(UserContext)

    let total = 0;
    cartItems.map((a, index) => total += a.precio * productNumbers[index])

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [dataProdcuto, setDataProducto] = useState()

    const showModal = (item, cant) => {
        setOpen(true);
        setDataProducto(item)
        setContCarrito(parseInt(cant))
    };
    const handleOk = (cant, producto) => {
        AgregarItemCarrito(user.id_carts, producto.id, cant)
        setOpen(false);
    };
    const handleCancel = (e) => {
        setOpen(false);
    };

    const handleEliminar = (e) => {
        EliminarItemCarrito(user.id_carts, e.id)
        setOpen(false);

    }

    const [contCarrito, setContCarrito] = useState(1);

    const handlePlusCarrito = () => {
        setContCarrito(contCarrito + 1)
    }

    const handleMinusCarrito = () => {
        if (contCarrito !== 1) {
            setContCarrito(contCarrito - 1);
        }
    };


    return (
        <div>
            <div>
                <img
                    alt=""
                    style={{ cursor: "pointer" }}
                    src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705706634/Guajolota/chevron-left_piq1vb.png"
                    onClick={() => {
                        navigate("/");
                    }}
                ></img>
                <TitlePages>Carrito</TitlePages>
            </div>

            {cartItems && cartItems.length > 0 ? (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    
                >
                    <div style={{ width: "100%", cursor: "pointer" }}>
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                    alignContent: "center",
                                }}
                                onClick={() => showModal(item, productNumbers[index])}
                            >
                                <div style={{ display: "flex", marginLeft: "20px" }}>
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "56px",
                                            height: "56px",
                                            marginRight: 20,
                                        }}
                                        key={item.id}
                                    >
                                        <ImagenProducto
                                            src={item.imagen}
                                            style={{
                                                backgroundImage: `url(${item.plato})`,
                                                objectFit: "contain",
                                                backgroundSize: "contain",
                                                marginLeft: "8px",
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            marginLeft: "20px",
                                            alignContent: "center",
                                        }}
                                    >
                                        <CartItemText>{item.nombre}</CartItemText>
                                        <CartItemText style={{ color: "#FA4A0C" }}>
                                            x{productNumbers[index]}
                                        </CartItemText>
                                    </div>
                                </div>
                                <CartPriceText
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: 20,
                                    }}
                                >
                                    ${item.precio * productNumbers[index]} MXN
                                </CartPriceText>
                            </div>
                        ))}
                        <CartTotalDiv style={{ margin: 20 }}>
                            <TextButtonAS style={{ color: "#0D0D0D" }}>Total</TextButtonAS>
                            <TextButtonAS style={{ color: "#FA4A0C" }}>${total} MXN</TextButtonAS>
                        </CartTotalDiv>
                    </div>

                    <DivButtonAS style={{ display: "flex", backdropFilter: 0 }}>
                        <ButtonAS onClick={() => { navigate('/pasarela')}}>
                            <TextButtonAS>Pagar</TextButtonAS>
                        </ButtonAS>
                    </DivButtonAS>

                    <Modal
                        open={open}
                        onOk={() => handleOk(contCarrito, dataProdcuto)}
                        onCancel={handleCancel}
                        okText="Actualizar"
                        okButtonProps={{
                            style: {
                                order: "-1", margin: 0, color: "#F6F6F9", border: "none",
                                backgroundColor: "#FA4A0C", borderRadius: 40, padding: "12px 24px", height: "auto", fontSize: 17,
                                fontWeight: 600
                            }
                        }}
                        cancelText="Cancelar"
                        cancelButtonProps={{
                            style: {
                                margin: 0, color: "#FA4A0C", border: "none",
                                backgroundColor: "transparent", borderRadius: 40, padding: "12px 24px", height: "auto", fontSize: 17,
                                fontWeight: 600
                            }
                        }}
                        style={{ width: 312 }}
                        footer={[
                            // Add the "Eliminar" button to the footer
                            <Button key="delete" onClick={() => { handleEliminar(dataProdcuto) }}>
                                Eliminar
                            </Button>,
                            <Button key="cancel" onClick={handleCancel}>
                                Cancelar
                            </Button>,
                            <Button key="ok" type="primary" onClick={() => handleOk(contCarrito, dataProdcuto)}>
                                Actualizar
                            </Button>,
                        ]}
                        >
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <img src={dataProdcuto?.imagen} alt='' style={{
                                width: 80, height: 80, objectFit: "contain", backgroundImage: `url(${dataProdcuto?.plato})`,
                                backgroundRepeat: "no-repeat", backgroundPosition: "center"
                            }}>
                            </img>
                            <TextButtonAS style={{ color: "#0D0D0D" }}>{dataProdcuto?.nombre}</TextButtonAS>
                            <CartPriceText
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                ${dataProdcuto?.precio * contCarrito} MXN
                            </CartPriceText>
                            <DivContadorCart>
                                <MinusCircleOutlined onClick={() => handleMinusCarrito()} />
                                <h3 style={{ margin: 0 }}>{contCarrito}</h3>
                                <PlusCircleOutlined onClick={() => handlePlusCarrito()} />
                            </DivContadorCart>
                        </div>
                    </Modal>
                </div>
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        style={{
                            width: "113.128px",
                            height: "107.986px",
                            marginTop: "20%",
                            marginBottom: "auto",
                        }}
                        src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png"
                        alt=""
                    ></img>
                    <NoCartItemsIcon>No hay productos</NoCartItemsIcon>
                    <DivButtonAS style={{ display: "flex" }}>
                        <ButtonAS style={{ opacity: "0.5" }}>
                            <TextButtonAS>Pagar</TextButtonAS>
                        </ButtonAS>
                    </DivButtonAS>
                </div>
            )}
        </div>
    );
}

export default Cart