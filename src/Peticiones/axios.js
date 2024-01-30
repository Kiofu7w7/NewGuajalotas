import axios from "axios"
import { urlCarritos } from "../helpers/urls";


export const GetData = async (url) => {
    try {
      const resp = await axios.get(url);
      if (resp.status === 200) {
        return resp.data;
      } else {
        throw new Error(`Get request failed with status ${resp.status}`);
      }
    } catch (error) {
      return { status: "error", message: error.message };
    }
};
  
export const PatchData = async (url, id, data) => {
    try {
      const resp = await axios.patch(`${url}/${id}`, data);
      if (resp.status >= 200 && resp.status < 300) {
        return { status: "success", data: resp.data };
      } else {
        throw new Error(`Patch request failed with status ${resp.status}`);
      }
    } catch (error) {
      return { status: "error", message: error.message };
    }
};

export const DeleteData = async (url, id) => {
    try {
        const resp = await axios.delete(`${url}/${id}`);
        if (resp.status === 204) { // 204 No Content is the typical success status for DELETE
        return { status: "success" };
        } else {
        throw new Error(`Delete request failed with status ${resp.status}`);
        }
    } catch (error) {
        return { status: "error", message: error.message };
    }
};

export const GetDataUsersCarts = async (url, id) => {
    try {
      const resp = await axios.get(`${url}/${id}`);
      if (resp.status === 200) {
        return resp.data;
      } else {
        throw new Error(`Get request failed with status ${resp.status}`);
      }
    } catch (error) {
      return { status: "error", message: error.message };
    }
};
  
export const PatchDataUsersCarts = async (url, id, data) => {
    try {
        const resp = await axios.patch(`${url}/${id}`, data);
        if (resp.status >= 200 && resp.status < 300) {
        return { status: "success", data: resp.data };
        } else {
        throw new Error(`Patch request failed with status ${resp.status}`);
        }
    } catch (error) {
        return { status: "error", message: error.message };
    }
};
  
export const DeleteDataUsersCarts = async (url, id) => {
    try {
        const resp = await axios.delete(`${url}/${id}`);
        if (resp.status === 204) {
        return { status: "success" };
        } else {
        throw new Error(`Delete request failed with status ${resp.status}`);
        }
    } catch (error) {
        return { status: "error", message: error.message };
    }
};

export const PutDataUsersCarts = async (url, data) => {
  try {
    const resp = await axios.post(`${url}`, data);

    if (resp.status === 200 || resp.status === 201) {
      return { status: "success", data: resp.data };
    } else {
      throw new Error(`Put request failed with status ${resp.status}`);
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const AgregarItemCarrito = async (id, idProducto, cant) => {
  try {
    const resp = await axios.get(`${urlCarritos}/${id}`);
    const idProductsArray = resp.data.id_products.split("|");

    const newProp = idProductsArray.map((item, index) => {
      let itemSplit = item.split(":");

      if (parseInt(itemSplit[0]) === parseInt(idProducto)) {
        itemSplit[1] = cant.toString();
        return itemSplit.join(":");
      } else {
        return item;
      }
    });

    if (!newProp.some((item) => item.startsWith(idProducto.toString()))) {
      newProp.push(`${idProducto}:${cant}`); 
    }

    resp.data.id_products = newProp.join("|");
    console.log(resp.data.id_products)
    //await axios.put(`${urlCarritos}/${id}`, resp.data); // Update server

    return resp.data;
  } catch (error) {
    throw error;
  }
};