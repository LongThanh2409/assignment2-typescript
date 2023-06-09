import Slider from "../components/layout/slider"
import { getProducts } from "../Api/products"
import { IProduct } from "../interfaces/products"
import Products from "../components/products"
import { useEffect, useState } from "react"
const HomePages = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getProducts()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return <>


        <Slider />

        <h1 className="my-10 text-xl ml-10">Điện Thoại Nổi Bật</h1>
        <section className="py-10 bg-gray-100">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {products.map(product => <Products
                    data={product}
                    key={product.id} />)}



            </div>
        </section >

    </>
}

export default HomePages