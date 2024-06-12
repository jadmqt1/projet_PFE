const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = async () => await axiosClient.get("/products/?populate=images");

const getOneProduct = async (id) => await axiosClient.get(`/products/${id}/?populate=images`);

export default {
    getOneProduct,
    getLatestProducts
}