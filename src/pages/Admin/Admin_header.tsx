import { Login_user } from "../../Api/athu"
import { useLocalStorage } from "../../hooks"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()

    function clearAccessToken() {
        localStorage.removeItem("accessToken");
        setUser(null)
        navigate('/')
    }
    // setUser({
    //     accessToken,
    //     ...user
    // })
    return <>
        <header className="bg-[#00B0D7] ">
            <div className="container w-2/3  h-[64px] mx-auto flex items-center gap-7">
                <img className="w-[64px] pl-2" src="/logo.png" alt="" />
                <input className="pl-2 rounded-lg grow h-[34px] " type="text" placeholder="search" />
                <h1 className="text-white">Hello  {user ? user.Name : "Admin"}</h1>
                <button className="bg-red-500 text-white hover:bg-red-700 p-2 rounded-lg" onClick={clearAccessToken}>Đăng xuất </button>
            </div>
        </header>
    </>
}

export default Header