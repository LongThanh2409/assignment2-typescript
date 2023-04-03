

const EditProducts_Admin = () => {
    return <>
        <div className="flex flex-col md:flex-row w-full">

            <div className="md:w-2/5 p-4">
                <h2 className="text-xl font-bold mb-4">Thêm ảnh sản phẩm</h2>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">

                    <span className="text-gray-400">

                    </span>
                </div>
                <span>Mô tả ngắn</span>
                <input type="text" placeholder="Mô tả ngắn" className="mt-4 p-2 rounded-lg border border-gray-300 w-full" />

            </div>
            <div className="w-full">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                        Tên sản phẩm
                    </label>
                    <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" />
                </div>
                <div className="price flex">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                            Giá gốc sản phẩm
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                            Giá Khuyến Mãi
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-category">
                        Danh mục sản phẩm
                    </label>
                    <select className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-category">
                        <option value="">Chọn danh mục sản phẩm</option>
                        <option value="category1">Danh mục sản phẩm 1</option>
                        <option value="category2">Danh mục sản phẩm 2</option>
                        <option value="category3">Danh mục sản phẩm 3</option>
                    </select>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                        Đặc Điểm Nổi Bật
                    </label>
                    <textarea rows={4} className="appearance-none block w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description" ></textarea>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                        Mô tả dài
                    </label>
                    <textarea rows={4} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description" ></textarea>
                </div>
                <button className="bg-[#00B0D7] hover:bg-blue-400 p-2 rounded-md">Cập nhật</button>
            </div>
        </div >
    </>
}

export default EditProducts_Admin