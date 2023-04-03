import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"
import Footer from "./footer"
const UserLayout = () => {
    return <>
        <div className="px-1">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>
}

export default UserLayout