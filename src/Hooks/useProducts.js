import { useState, useEffect } from 'react';
import { GetData } from '../Peticiones/axios';
import { urlComida } from '../helpers/urls';

function useProducts() {
  const [data, setData] = useState();
  const [categoriaData, setCategoriaData] = useState();
  const [dataSelectProduct, setDataSelectProduct] = useState()

  useEffect(() => {
    async function cargarDatos() {
      const resp = await GetData(urlComida);
      setData(resp); 
    }
    cargarDatos();
  }, []);

  const handleCambiarC = (index) => {
    setCategoriaData(data[index])
  }
  
  const handleCambiarP = (index) => {
    setDataSelectProduct(categoriaData.contenido[index])
  }

  return { data, categoriaData, dataSelectProduct, handleCambiarC, handleCambiarP};
}

export default useProducts;