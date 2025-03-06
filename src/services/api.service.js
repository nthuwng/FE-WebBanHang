import axios from "./axios.customize";

const fetchProductAPI = async (page, limit) => {
  const URL_BACKEND = `/product/getProduct/?page=${page}&limit=${limit}`;
  return axios.get(URL_BACKEND);
};
const fetchUsertAPI = async () => {
  const URL_BACKEND = "/user/allUser";

  return axios.get(URL_BACKEND);
};

const loginApi = async (email, password) => {
  const URL_BACKEND = "/user/sign-in";

  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

const registerAPI = (full_name, email, password, phone, address) => {
  const URL_BACKEND = "/user/sign-up";

  const data = {
    full_name: full_name,
    email: email,
    password: password,
    phone: phone,
    address: address,
  };
  return axios.post(URL_BACKEND, data);
};

export { fetchProductAPI, loginApi, registerAPI,fetchUsertAPI

 };
