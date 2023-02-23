import axios from "axios"

const baseUrl = "http://localhost:8084/api/v1/"

export const apiPost = (url, formData) => {
    return axios.post(`${baseUrl}${url}`, formData)
}