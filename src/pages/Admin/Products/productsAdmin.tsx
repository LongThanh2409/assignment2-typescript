import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DeleteProducts, getProducts } from "../../../Api/products"
import { IProduct } from "../../../interfaces/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "react-loading";
import { Image } from "antd";
import { useLocalStorage } from "../../../hooks";
import { ICategorys } from "../../../interfaces/categorys";
import { getCategorys } from "../../../Api/categorys";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
type Props = {
    data: IProduct
}
const ProductsAdmin = () => {
    const [user] = useLocalStorage('user', null)
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<ICategorys[]>([]);

    const fetchProduct = async () => {
        try {
            const { data } = await getProducts()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }
    const fetchCategory = async () => {
        try {
            const { data } = await getCategorys();
            setCategories(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handlRomve = async (id: string | number) => {
        if (window.confirm("Bạn có chắc là muốn xóa")) {
            if (user.role) {

                DeleteProducts(id).then(() => {
                    setProducts(products.filter((products) => products.id != id))
                }).catch((err) => {
                    console.log(err.error);

                })
            }
        }

        alert("bạn không có quyền")
    }

    useEffect(() => {
        fetchProduct()
        fetchCategory()
    }, [])


    return <>
        {console.log(categories)
        }
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
                    <th >Category</th>
                    <th  >Action </th>
                </tr>
            </thead>
            <tbody className="divide-y-[3px] divide-gray-200">
                {products.map((products, index) => {

                    return (
                        <tr className="text-center">
                            <th >{index + 1}</th>
                            <td className="font-bold">{products.name}</td>
                            <td className="w-32 m-auto" >
                                <Image
                                    src={products?.images[0]?.base_url}
                                />
                            </td>



                            <td className="w-36">{products.price.toLocaleString("vi-VN")}đ</td>

                            <td className="w-36 line-through ">{products.original_price.toLocaleString("vi-VN")}đ</td>

                            <td className="w-36">

                                <div className="text-sm font-sans text-gray-600 mt-7 leading-5 line-clamp-2 " dangerouslySetInnerHTML={{ __html: products.description }} />
                            </td>

                            <td className="w-36">



                                {products?.brand?.name}




                            </td>
                            <td >

                                <button onClick={() => handlRomve(products.id)} data-name="${projects.name}" data-id="${projects.id}" className="bg-red-500 text-white hover:bg-red-700 btn-remove border-0 p-2 rounded-md mx-1">
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