import axios from "axios";

const API_URL =
  "http://localhost:5000/api/cart";

export const getCart = async (token) => {

  console.log("TOKEN:", token);

  const response = await axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeFromCart = async (
  cartId,
  token
) => {

  const response = await axios.delete(
    `${API_URL}/${cartId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};