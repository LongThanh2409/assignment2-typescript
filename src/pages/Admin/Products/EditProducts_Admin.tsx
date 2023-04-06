import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom'
import { getProduct, UpdateProducts } from '../../../Api/products';
import { updateForm, updateSchema } from '../../../interfaces/products';


const EditProducts_Admin = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, watch, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }

    })


    const onSubmit = async (data: updateForm) => {
        try {
            if (id) {
                const response = await UpdateProducts(id, data)
                console.log(response);
                navigate('/admin')
            }
        } catch (err) {
            console.log(err);

        }

    }

    const fetchProductById = async (id: string) => {
        const { data } = await getProduct(id)
        return data

    }
    return <>
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row w-full" >

                <div className="md:w-2/5 p-4">
                    <h2 className="text-xl font-bold mb-4">Update ảnh sản phẩm</h2>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                        {/* <input type="image" {...register(`images.${0}.base_url`)} /> */}
                        <img width={250} src={watch(`images.${0}.base_url`)} alt="Product image" />
                        {/* <input type="file" {...register(`images.${0}.base_url`)} />
                        <p> {errors.images?.[0]?.base_url && errors.images?.[0]?.base_url.message}</p> */}


                        {/* <span className="text-gray-400">
                            <i className="cursor-grab"><FontAwesomeIcon icon={faSquarePlus} size="3x" style={{ color: "#1b97b6", }} /></i>

                        </span> */}
                    </div>
                    <span>Link img</span>
                    <input type="text" {...register(`images.${0}.base_url`)} className="mt-4 p-2 rounded-lg border border-gray-300 w-full" />

                </div>

                <div className="w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Tên sản phẩm
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text"  {...register("name")} />
                        <p className='text-red-600 text-[10px]'>
                            {errors.name && errors.name.message}
                        </p>
                    </div>
                    <div className="price flex">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá gốc sản phẩm
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("original_price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.original_price && errors.original_price.message}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá Khuyến Mãi
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.price && errors.price.message}
                            </p>
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
                        <textarea rows={4} className="appearance-none block w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description"  {...register("description")} ></textarea>
                        <p className='text-red-600 text-[10px]'>
                            {errors.description && errors.description.message}
                        </p>
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
        </form>
    </>
}

export default EditProducts_Admin