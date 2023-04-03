import Header from "./Admin_header"
import Navbar from "./Admin_Navbar"
import { Outlet } from "react-router-dom"
import ProductsAdmin from "./Pages/Products/productsAdmin"

const Layout = () => {
    return <>
        <div className="flex flex-col h-screen">
            {/* header */}
            <Header />
            <div className="flex-1 flex flex-row">
                {/* Navbar */}
                <Navbar />

                <div className="flex-1 bg-gray-100 p-4  h-screen o">
                    {/* Products_ */}
                    <Outlet />
                    {/* <ProductsAdmin /> */}
                </div>
            </div>
        </div>

    </>
}

export default Layout