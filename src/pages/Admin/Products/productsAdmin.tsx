import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DeleteProducts, getProducts } from "../../../Api/products"
import { IProduct } from "../../../interfaces/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "react-loading";
import { Image } from "antd";
type Props = {
    data: IProduct
}
const ProductsAdmin = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getProducts()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }
    const handlRomve = async (id: string | number) => {
        DeleteProducts(id).then(() => {
            setProducts(products.filter((products) => products.id != id))
        }).catch((err) => {
            console.log(err.error);

        })
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    return <>
        <div>
            <Loading type="bars" color="#f0f0f0" />
        </div>
        <div className="flex justify-around">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
            <Link to={"add-products"}>
                <i className="cursor-grab"><FontAwesomeIcon icon={faSquarePlus} beat size="3x" style={{ color: "#1b97b6", }} /></i>
            </Link>


        </div>

        <table className="table-auto  my-5 w-full " >
            <thead>
                <tr className="text-center ">
                    <th id="th_id">ID</th>
                    <th >Name</th>
                    <th >Image</th>
                    <th >Price</th>
                    <th >Price gốc</th>
                    <th >Describe</th>
                    <th  >Action </th>
                </tr>
            </thead>
            <tbody className="divide-y-4 divide-gray-200">
                {products.map((products, index) => {

                    return (
                        <tr className="text-center">
                            <th >{index + 1}</th>
                            <td className="font-bold">{products.name}</td>
                            <td className="w-36 m-auto" >
                                <Image
                                    src={products.images[0].base_url}
                                />
                            </td>



                            <td className="w-36">{products.price}</td>
                            <td className="w-36">{products.original_price}</td>
                            <td className="w-56"></td>
                            <td>

                                <button onClick={() => handlRomve(products.id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-blue-500 text-white hover:bg-blue-700 btn-remove border-0 p-2 rounded-md mx-1">
                                    Remove
                                </button>
                                <button data-name="${projects.name}" className="bg-green-500 hover:bg-green-600 text-white btn-update border-0 p-2  rounded-md mx-1">
                                    <Link to={"edit-products/" + products.id}> Update</Link>

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