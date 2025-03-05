import axios from "./axios.customize";

const fetchProductAPI = async (page, limit) => {
  const URL_BACKEND = `/product/getProduct/?page=${page}&limit=${limit}`;
  return axios.get(URL_BACKEND);
};

const loginApi = async (email, password) => {
  const URL_BACKEND = "/user/login";

  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

export { fetchProductAPI, loginApi };