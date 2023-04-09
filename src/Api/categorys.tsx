import { ICategorys } from "../interfaces/categorys";
import instance from "./config";
const getCategorys = () => {
    return instance.get("/categorys")
}

const getCategory = (id: string | number) => {
    return instance.get("/categorys/" + id)
}

const UpdateCategorys = (id: string | number, categorys: updateForm) => {
    return instance.put("/categorys/" + id, categorys)
}

const AddCategorys = (categorys: addForm) => {
    return instance.post("/categorys", categorys)
}

const DeleteCategorys = (id: string | number) => {
    return instance.delete("/categorys/" + id)
}
export { AddCategorys, DeleteCategorys, UpdateCategorys, getCategorys, getCategory }

