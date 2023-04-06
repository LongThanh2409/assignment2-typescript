import { IProduct, addForm, updateForm } from "../interfaces/products";
import instance from "./config";
const getProducts = () => {
    return instance.get("/products")
}

const getProduct = (id: string) => {
    return instance.get("/products/" + id)
}

const UpdateProducts = (id: string | number, products: updateForm) => {
    return instance.put("/products/" + id, products)
}

const AddProducts = (products: addForm) => {
    return instance.post("/products", products)
}

const DeleteProducts = (id: string | number) => {
    return instance.delete("/products/" + id)
}
export { AddProducts, DeleteProducts, UpdateProducts, getProducts, getProduct }

