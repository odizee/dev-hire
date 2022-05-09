import axios from "axios";

//BASE API
const API_URL = "https://api.terawork.com/";

//Freelancers
const freelancers = async () => {
  const response = await axios.get(
    API_URL +
      "service-categories/sellers-services/computer-software-development"
  );

  return response.data;
};

//Currencies
const currencies = async () => {
  const response = await axios.get(API_URL + "resources");

  return response.data;
};

const authService = {
  freelancers,
  currencies,
};

export default authService;

//Login
