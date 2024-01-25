import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GetData } from '../Peticiones/axios';
import { urlComida } from '../helpers/urls';
import { DivContadorCart, DivSabores, DivTituloPrecio, PrecioDeDetails, TituloDeDetails } from '../Components/StyleComponentsDetails';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import useProducts from '../Hooks/useProducts';

function DetailsProduct() {

    const { id } = useParams();
    const [dataProduct, setDataProduct] = useState();
    const {
        data,
        categoriaData,
        dataSelectProduct,
        handleCambiarC,
        handleCambiarP,
    } = useProducts();
    
    const navigate = useNavigate();

    useEffect(() => {
        async function movie() {
          const resp = await GetData(`${urlComida}/${id}`);
          setDataProduct(resp);
        }
        movie();
    }, [id]);

    //CONTADOR CANTIDAD
    const [contCarrito, setContCarrito] = useState(1);

    const handlePlusCarrito = () => {
    setContCarrito(contCarrito + 1)
    }

    const handleMinusCarrito = () => {
    if(contCarrito !== 1){
        setContCarrito(contCarrito - 1);
    }
    };

    return (
        <div>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <img style={{width: 24,height: 24, objectFit: "contain"}} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705706634/Guajolota/chevron-left_piq1vb.png' alt=''></img>
                <img style={{width: 165.833, height: 155.865, objectFit: "contain"}} src={dataProduct?.imagen} alt=''></img>
                <img style={{width: 24 ,height: 24, objectFit: "contain"}} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png' alt=''></img>
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
            <div>
              <h3>Sabor</h3>
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
                                onClick={() => navigate(`/datails-products/${item.id}`)}
                                />
                            );
                    }
                )}
              </DivSabores>
            </div>
            <div>
            <h3>Guajalocombo</h3>
                {dataProduct?.categoria === "guajolotas" && dataProduct?.categoria === "tamales" && (
                    <div>
                    <p>This product is part of a Guajalocombo!</p>
                    </div>
                )}
                {!(dataProduct?.categoria === "guajolotas" && dataProduct?.categoria === "tamales") && (
                    <div>
                    <p>This product is not part of a Guajalocombo.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailsProduct