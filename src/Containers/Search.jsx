import React, { useEffect, useState } from 'react'
import { SearchDiv, SearchInput, TarjetaBlanca, TextPrecioTarjeta, TextTarjeta } from '../Components/StyleComponentsHome'
import { SearchOutlined } from '@ant-design/icons'
import useProducts from '../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';

function Search() {

    const { data } = useProducts();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data); // Initial filtered data is the full data

    useEffect(() => {
        setFilteredData(
            data?.filter((product) =>
                product.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, searchTerm]);

    return (
        <div>
            <SearchDiv style={{marginBottom: 20}}>
                <SearchOutlined />
                <SearchInput
                    placeholder="Sabor de guajolota, bebida..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    autoFocus
                />
            </SearchDiv>
            <div>
                {filteredData?.map((product, index) => (
                    <TarjetaBlanca onClick={() => { navigate(`/datails-products/${product.id}`); }} key={index}>
                        <img style={{ width: 80, height: 80, objectFit: "contain" }} alt='' src={product.imagen}></img>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <TextTarjeta style={{ marginBottom: 8 }}>{product.nombre_completo}</TextTarjeta>
                            <TextPrecioTarjeta>${product.precio} MXN</TextPrecioTarjeta>
                        </div>
                    </TarjetaBlanca>
                ))}
            </div>
        </div>
    );
}

export default Search