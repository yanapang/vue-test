import {apiInstance} from "./axios.ts";

const ENDPOINT = import.meta.env.VITE_API_URL;

export const fetchHello = () =>
    apiInstance.get(`${ENDPOINT}/common/hello`)

