import { useEffect, useState } from 'react'
import { GetData } from '../Peticiones/axios';
import { urlCopias } from '../helpers/urls';

function useNoDis() {
    const [dataNoDis, setDataNoDis] = useState();
    const [categoriaData, setCategoriaData] = useState();
    const [dataSelectProduct, setDataSelectProduct] = useState()

    useEffect(() => {
        async function cargarDatos() {
            const resp = await GetData(urlCopias);
            setDataNoDis(resp);
        }
        cargarDatos();
    }, []);

    const handleCambiarC = (index) => {
        setCategoriaData(dataNoDis[index])
    }

    const handleCambiarP = (index) => {
        setDataSelectProduct(categoriaData.contenido[index])
    }

    return { dataNoDis, categoriaData, dataSelectProduct, handleCambiarC, handleCambiarP };
}

export default useNoDis