import axios from "./axios.customize";

const fetchProductAPI = async (page, limit) => {
  const URL_BACKEND = `/product/getProduct/?page=${page}&limit=${limit}`;
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

const fetchProduct_Name_API = async (category, page, limit) => {
  const URL_BACKEND = `product/getProductByName/${category}?page=${page}&limit=${limit}`;
  return axios.get(URL_BACKEND);
};

const getAccountAPI = async () => {
  const URL_BACKEND = "/user/account";
  return axios.get(URL_BACKEND);
};

const handleAddProductToCartAPI = async (userID, productID, quantity) => {
  const URL_BACKEND = `/carts/addProductToCart`;
  const data = {
    userID: userID,
    productID: productID,
    quantity: quantity,
  };
  return axios.post(URL_BACKEND, data);
};

const getCartByUserIDServices = async (userID) => {
  const URL_BACKEND = `/carts/getCartByUserID/${userID}`;
  return axios.get(URL_BACKEND);
};

const getCart_details_ByUserId = async (userID) => {
  const URL_BACKEND = `/cart_details/getCart_details_ByUserId?userId=${userID}`;
  return axios.get(URL_BACKEND);
};

const putUpdateCart_detailsServices = async (
  cart_detailsID,
  productId,
  quantity
) => {
  const URL_BACKEND = `/cart_details/updateCart_details/${cart_detailsID}`;

  const data = {
    productId: productId,
    quantity: quantity,
  };
  return axios.put(URL_BACKEND, data);
};

const deleteCart_details = async (id, userId) => {
  const URL_BACKEND = `/cart_details/deleteCart_details`;

  const config = {
    data: {
      id: id,
      userId: userId,
    },
  };
  return axios.delete(URL_BACKEND, config);
};

export {
  fetchProductAPI,
  loginApi,
  registerAPI,
  fetchProduct_Name_API,
  getAccountAPI,
  handleAddProductToCartAPI,
  getCartByUserIDServices,
  getCart_details_ByUserId,
  putUpdateCart_detailsServices,
  deleteCart_details,
};
