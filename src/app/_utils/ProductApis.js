const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = async () => axiosClient.get("/products");
export default {
    getLatestProducts
}