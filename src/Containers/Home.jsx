import React, { useState } from 'react'
import { DivCategoria, ItemCategorias, NavBarDiv, SearchDiv, SearchInput, TarjetaBlanca, TextPrecioTarjeta, TextTarjeta } from '../Components/StyleComponentsHome'
import { SearchOutlined } from '@ant-design/icons'
import useProducts from '../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';

function Home() {

    const {
    data,
    categoriaData,
    dataSelectProduct,
    handleCambiarC,
    handleCambiarP,
    } = useProducts();

    const [selectedCategoria, setSelectedCategoria] = useState("guajolotas");
    const navigate = useNavigate();
    

  return (
    <div>
        <header>
            <NavBarDiv>
                <img style={{width: "100px", height: "100px", objectFit: "contain"}} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705378408/Guajolota/363f139aa7086e67976c63e2eea1fb1c_kn7onm.png' alt=''></img>
                <img src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png' style={{width: 24,height: 24,}} alt=''></img>
            </NavBarDiv>
            <h1
            style={{
              width: "auto",
              minWidth: "250px", 
              fontSize: 34,
              fontWeight: 700,
              fontFamily: "Inter",
            }}
            >
                Nada como una Guajolota para empezar el día
            </h1>
            <SearchDiv>
                <SearchOutlined />
                <SearchInput placeholder="Sabor de guajolota, bebida..."></SearchInput>
            </SearchDiv>
        </header>
        <section style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <DivCategoria>
                <ItemCategorias
                id="guajolotas"
                className={selectedCategoria === "guajolotas" ? "selected" : ""}
                onClick={() => setSelectedCategoria("guajolotas")}
                >
                    Guajolotas
                </ItemCategorias>
                <ItemCategorias
                id="bebidas"
                className={selectedCategoria === "bebidas" ? "selected" : ""}
                onClick={() => setSelectedCategoria("bebidas")}
                >
                    Bebidas
                </ItemCategorias>
                <ItemCategorias
                id="tamales"
                className={selectedCategoria === "tamales" ? "selected" : ""}
                onClick={() => setSelectedCategoria("tamales")}
                >   
                    Tamales
                 </ItemCategorias>
            </DivCategoria>
            {data?.filter((product) => product.categoria === selectedCategoria).map((product, index) => (
                <TarjetaBlanca onClick={() => {navigate(`/datails-products/${product.id}`);}} key={index}>
                    <img style={{width: 80, height:80, objectFit: "contain"}} alt='' src={product.imagen}></img>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <TextTarjeta style={{marginBottom: 8}}>{product.nombre}</TextTarjeta>
                        <TextPrecioTarjeta>${product.precio} MXN</TextPrecioTarjeta>
                    </div>
                </TarjetaBlanca>
            ))}
        </section>
    </div>
  )
}

export default Home