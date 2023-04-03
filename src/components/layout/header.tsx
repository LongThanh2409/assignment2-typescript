import Slider from "./slider"


const Header = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500 ">
            <div className="container w-2/3  h-[64px] mx-auto flex items-center gap-7">
                <img className="w-[64px] pl-2" src="/logo.png" alt="" />
                <input className="pl-2 rounded-lg grow h-[34px] " type="text" placeholder="search" />
            </div>
        </header>


    </>
}

export default Header