import axios from "../custom-axios/axios";


const DIGITBiteService = {
    fetchCategories:async () => {
        return await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    },
    fetchItemsByCategory:async (category) => {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    },

    deleteProduct: (id) => {
        return axios.delete(`/products/${id}/delete`);
    },
    addProduct: (name, image, price, brandId) => {
        return axios.post("/products/add", {
            "name": name,
            "image" : image,
            "price": price,
            "brandId" : brandId
        });
    },
    editProduct: (id, name, image, price, brandId) => {
        return axios.put(`/products/${id}/edit`, {
            "name": name,
            "image": image,
            "price": price,
            "brandId": brandId
        });
    },
    getProduct: (id) => {
        return axios.get(`/products/${id}`);
    }
}


export default DIGITBiteService;

