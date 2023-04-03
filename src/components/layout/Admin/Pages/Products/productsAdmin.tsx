import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DeleteProducts, getProducts } from "../../../../../Api/products"
import Products from "../../../../../interfaces/products"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
const ProductsAdmin = () => {
    const [products, SetProducts] = useState([])
    useEffect(() => {
        getProducts().then(({ data }) => SetProducts(data))
    }, [])
    const handlRemove = (id: string | number) => {
        if (window.confirm("Bạn có chắc là muốn xóa ")) {
            DeleteProducts(id).then(() => {
                SetProducts(products.filter((products: Products) => products._id != id))
            }).catch((err) => {
                console.log(err.error);

            })
        }
    }
    if (products.length === 0) {
        return <>
            <div className="flex justify-around">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
                <Link to={"add-products"}>
                    <i className="cursor-grab"><FontAwesomeIcon icon={faSquarePlus} beat size="3x" style={{ color: "#1b97b6", }} /></i>
                </Link>


            </div>

            <h1>Sản phẩm Trống</h1>
        </>
    }
    return <>
        <div className="flex justify-around">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
            <Link to={"add-products"}>
                <i className="cursor-grab"><FontAwesomeIcon icon={faSquarePlus} beat size="3x" style={{ color: "#1b97b6", }} /></i>
            </Link>


        </div>

        <table className="table-auto my-5 w-full " >
            <thead>
                <tr className="text-center ">
                    <th id="th_id">ID</th>
                    <th >Name</th>
                    <th >Image</th>
                    <th >Price</th>
                    <th >Describe</th>
                    <th  >Action </th>
                </tr>
            </thead>
            <tbody>
                {products.map((products: Products, index) => {

                    return (
                        <tr className="text-center">
                            <th >{index + 1}</th>
                            <td>{products.nameProducts}</td>
                            <td><img className="w-36 m-auto" src="${projects.image}" /></td>

                            <td className="w-56">{products.priceProducts}</td>
                            <td className="w-80">{products.descriptionProducts}</td>
                            <td>
                                <button onClick={() => handlRemove(products._id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-blue-500 text-white hover:bg-blue-700 btn-remove border-0 p-2 rounded-md mx-1">
                                    Remove
                                </button>
                                <button data-name="${projects.name}" className="bg-green-500 hover:bg-green-600 text-white btn-update border-0 p-2  rounded-md mx-1">
                                    <Link to={"edit-products/" + products._id}> Update</Link>

                                </button>
                            </td>
                        </tr>
                    )
                })}




            </tbody>
        </table>
    </>
}

export default ProductsAdmin