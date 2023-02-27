import axios from "axios"

const baseUrl = "http://localhost:8084/api/v1/"

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
};


export const apiPost = (url, data) => {
    return axios.post(`${baseUrl}${url}`, data)
}

export const apiPostAuthorization = (path, data) => {
  return axios.post(`${baseUrl}${path}`, data, config);
};

export const apiGet = (url) => axios.get(`${baseUrl}${url}`)

export const apiGetAuthorization = (url) => {
    return axios.get(`${baseUrl}${url}`, config)
}

export const apiPut = (path,data) => {
    return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiPutWithoutData = (path) => {
    return axios.put(`${baseUrl}${path}`, config);
};

export const apiPatch = (path,data) => {
    return axios.patch(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path) => {
    return axios.delete(`${baseUrl}${path}`);
};

export const apiDeleteAuthorization = (path) => {
    return axios.delete(`${baseUrl}${path}`, config);
};