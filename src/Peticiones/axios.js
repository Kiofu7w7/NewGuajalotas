import axios from "axios"

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