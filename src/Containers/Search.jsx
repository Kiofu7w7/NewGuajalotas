import React, { useEffect, useState } from 'react';
import { DivIconB, SearchDiv, SearchInput, SearchP, TarjetaBlanca, TextPrecioTarjeta, TextTarjeta } from '../Components/StyleComponentsHome';
import { SearchOutlined } from '@ant-design/icons';
import useProducts from '../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';

function Search() {
    const { data } = useProducts();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]); // Initialize with empty array

    useEffect(() => {
        setFilteredData(
            data?.filter((product) =>
                product.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [data, searchTerm]);

    return (
        <div>
            <SearchDiv style={{ marginBottom: 20 }}>
                <SearchOutlined />
                <SearchInput
                    placeholder="Sabor de guajolota, bebida..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    autoFocus
                />
            </SearchDiv>
            <div style={{ width: "100%", height: "80vh" }}>
                {searchTerm?.length === 0 && (
                    <DivIconB>
                        <img style={{width: 122, height: 122, justifySelf: "center"}} alt='' src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1706324092/Guajolota/feather_search_y6y57u.png'></img>
                        <SearchP>Realiza una búsqueda</SearchP>
                    </DivIconB>
                )}
                {searchTerm?.length > 0 && (
                    filteredData.map((product, index) => (
                        <TarjetaBlanca onClick={() => navigate(`/datails-products/${product.id}`)} key={index}>
                            <img
                                style={{ width: 80, height: 80, objectFit: 'contain' }}
                                alt=''
                                src={product.imagen}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <TextTarjeta style={{ marginBottom: 8 }}>{product.nombre_completo}</TextTarjeta>
                                <TextPrecioTarjeta>${product.precio} MXN</TextPrecioTarjeta>
                            </div>
                        </TarjetaBlanca>
                    ))
                )}
                {
                    filteredData?.length === 0 && (
                        <DivIconB>
                            <img style={{ width: 122, height: 122, justifySelf: "center" }} alt='' src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1706324092/Guajolota/feather_search_y6y57u.png'></img>
                            <SearchP>No hay resultados</SearchP>
                        </DivIconB>
                    )
                }
            </div>
        </div>
    );
}

export default Search;