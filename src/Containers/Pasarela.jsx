import React, { useContext, useState } from 'react'
import useUser from '../Hooks/useUser';
import { UserContext } from '../Hooks/userContext';
import "../Styles/StylePasarela.css";
import { ContainerDetalles, ContainerMetodoPago, ContainerPago, ContainerPasarela, ContiarnetDatos, DivMetodoPago, FondoContainer, ImagenMetodoPago } from '../Components/StyleCompPasarela';

function Pasarela() {

    const { cartItems, productNumbers } = useUser();
    const { user } = useContext(UserContext)
    const [numFact] = useState(crypto.randomUUID())

    let total = 0;
    cartItems.map((a, index) => total += a.precio * productNumbers[index])


    return (
        <FondoContainer>
            <ContainerPasarela>
                <ContainerDetalles>
                    <ContiarnetDatos>    
                        <h2 style={{marginTop: 0}}>Total a pagar: ${total} MXN</h2>
                        <h3>Nombre: {user.name} {user.last_name}</h3>
                        <h3>Numero de pedido: {numFact}</h3>
                    </ContiarnetDatos>
                    <ContiarnetDatos style={{ overflow: "auto", maxHeight: "70%" }}>
                        <h3 style={{ marginTop: 0 }}>Factura:</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((product, index) => (
                                    <tr key={index}>
                                        <td><img alt={product.nombre_completo} src={product.imagen} style={{width: 50, height: 50, objectFit: "contain", backgroundColor: "white", borderRadius: 15}}></img></td>
                                        <td>{product.nombre_completo}</td>
                                        <td>{productNumbers[index]}</td>
                                        <td>{product.precio}</td>
                                    </tr>
                                ))}
                                <tr key="Total">
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </ContiarnetDatos>
                </ContainerDetalles>
                <ContainerPago>
                    <ContainerMetodoPago>
                        <DivMetodoPago className='Civica'>
                            <ImagenMetodoPago alt='nequiLogo' src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1706314810/Guajolota/logo-Nequi_by_Bancolombia_jyq3jf.png'></ImagenMetodoPago>
                        </DivMetodoPago>
                        <DivMetodoPago className='DaviPlata'>
                            <ImagenMetodoPago alt='nequiLogo' src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1706314809/Guajolota/daviplata-logo_gpeent.webp'></ImagenMetodoPago>
                        </DivMetodoPago>
                        <DivMetodoPago className='Nu'>
                            <ImagenMetodoPago alt='nequiLogo' src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1706314810/Guajolota/Nubank_logo_2021.svg_ngtogk.png'></ImagenMetodoPago>
                        </DivMetodoPago>
                    </ContainerMetodoPago>
                    <div style={{ marginTop: "20px" }} className="separator">
                        <hr className="line" />
                        <p>or pay using credit card</p>
                        <hr className="line" />
                    </div>
                    <div className="credit-card-info--form">
                        <div className="input_container">
                            <label className="input_label">Card holder full name</label>
                            <input id="name_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name"/>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Card Number</label>
                            <input id="credit_number_field" className="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000"/>
                        </div>
                        <div className="input_container">
                            <label className="input_label">Expiry Date / CVV</label>
                            <div className="split">
                                <input id="data_field" className="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23" />
                                <input id="password_field" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                            </div>
                        </div>
                    </div>
                    <button className="purchase--btn">Pagar</button>
                </ContainerPago>
            </ContainerPasarela>
        </FondoContainer>
    )
}

export default Pasarela