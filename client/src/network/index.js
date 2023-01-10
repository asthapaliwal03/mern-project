import AxiosServices from "./AxiosServices";

const BASE_URL='http://localhost:8000/';

export const getPosts = AxiosServices({url:`${BASE_URL}post`});