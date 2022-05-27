import axios from "axios";
const URL = "http://localhost:8080"

const AxiosInstance = axios.create({
    baseURL: URL
});
export default AxiosInstance