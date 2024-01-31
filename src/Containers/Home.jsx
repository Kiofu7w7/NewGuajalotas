import React, { useState } from 'react'
import { DivCategoria, ItemCategorias, SearchDiv, SearchInput, TarjetaBlanca, TextPrecioTarjeta, TextTarjeta } from '../Components/StyleComponentsHome'
import { SearchOutlined } from '@ant-design/icons'
import useProducts from '../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import NavBarH from '../Components/NavBarH';

function Home() {

    const {data} = useProducts();

    const [selectedCategoria, setSelectedCategoria] = useState("guajolotas");
    const navigate = useNavigate();
    

  return (
    <div style={{padding: 20}}>
        <NavBarH/>
        <header>
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
            <SearchDiv onClick={() => { navigate("/search") }}>
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