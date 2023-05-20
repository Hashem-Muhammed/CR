import axios from "axios";
let base = 'http://localhost:3001/products';
export let  getProducts = async ()=> {
     let response = await axios.get(base)
     return response.data
}
export let getProduct = async (id) => {
     let response = await axios.get(`${base}/${id}`)
     return response.data
}
export let addProduct = async(product) => {
     

     await axios.post(base , product)
}
export let editProduct= async (product) => {
     await axios.put(`${base}/${product.id}` , product);
}
export let deleteProduct = async(id) => {
     await axios.delete(`${base}/${id}`)
}