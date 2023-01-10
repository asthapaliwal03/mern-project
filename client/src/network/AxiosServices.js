import Axios from "axios";

const AxiosServices = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};


export default AxiosServices;
