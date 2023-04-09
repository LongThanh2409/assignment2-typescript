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

        <h1>Điện Thoại Nổi Bật</h1>
        <div className="grid xl:grid-cols-5  gap-5  sm:grid-cols-4">

            {products.map(product => <Products
                data={product}
                key={product.id} />)}


        </div >

    </>
}

export default HomePages