
import { IProduct } from "../interfaces/products"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../Api/products"

const Products_detail = () => {

    // assertion
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { id } = useParams()

    const fetchProductById = async () => {
        const { data } = await getProduct(id!)
        setProduct(data)
    }
    useEffect(() => {
        fetchProductById()
    }, [id])

    return <>
        {console.log(product.name)}

        <nav className=" text-black shadow-lg ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">

                        <div className="ml-10 flex items-baseline space-x-2">

                            <span className="hover:underline px-2 py-2 rounded-md text-sm font-medium">Trang chủ </span>


                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">Điện thoại</a>
                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">{product.name}</a>
                            <a href="#" className="hover:underline px-3 py-2 rounded-md text-sm font-medium">iPhone 13</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* Tên sản phẩm */}
        <h2 className="capitalize text-lg ml-24 py-4 font-semibold text-gray-800">{product.name}</h2>
        {/* hr */}
        <hr className="border-t-4" />

        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">



            <div className="lg:flex  ">
                <div className=" min-w-0">
                    {/* Ảnh sản sản phẩm */}

                </div>
                <div className=" flex lg:mt-0 lg:ml-10">
                    <div className="max-w-ful flex flex-col justify-between ml-32">




                        <div className="mt-4">
                            {/* Giá sản phẩm */}
                            <span className="mt-1 text-2xl  font-semibold text-red-500">{product.price}</span>
                            {/* Giá cũ của sản phẩm */}
                            <span className="mt-1 ml-1 text-sm font-semibold text-gray-500">{product.original_price}</span>

                            {/* Mô tả sản phẩm */}
                            <p className=" text-sm font-sans text-gray-600">{ }</p>
                        </div>

                    </div>



                </div>
            </div>
            <div className="mt-10 ml-24 flex">

                <div className="flex -mx-2 ">
                    <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black ">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[0]?.base_url} alt="Thumbnail 1" />
                    </div>
                    <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black">
                        <img className=" w-full  object-cover cursor-pointer" src={product.images?.[1]?.base_url} alt="Thumbnail 2" />
                    </div>
                    <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[0]?.base_url} alt="Thumbnail 3" />
                    </div>
                    <div className="w-1/12 mx-[1px] h-auto w-20  border-2 border-black">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[1]?.base_url} alt="Thumbnail 4" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-96 m-auto">
                    <div className="">

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-14 rounded">
                            Mua ngay
                        </button>
                    </div>

                    {/* Nút thêm sản phẩm vào giỏ hàng */}
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Thêm vào giỏ hàng
                        </button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col mt-10 items-center justify-center  bg-gray-100 p-4">
                <h1 className="text-red-500 text-lg font-bold mb-4">ĐẶC ĐIỂM NỔI BẬT</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae faucibus diam. Nullam at mi risus. Cras eget sem nec nisi dapibus ullamcorper. Ut consequat urna ipsum, eu pharetra neque luctus in.</p>
            </div>
        </div>

    </>
}

export default Products_detail