import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://mern-blog-msoul.herokuapp.com/api/"
})