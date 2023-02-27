import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: `https://front-end-test.beta-cs.blip.ai/`
});

export default instance;