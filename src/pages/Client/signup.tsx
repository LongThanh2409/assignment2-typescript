import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { SignupForm, signupSchema } from '../../interfaces/auth';
import { Sig_nup } from '../../Api/athu';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })
    const navigate = useNavigate()
    const onSubmit = async (data: SignupForm) => {

        try {
            const response = await Sig_nup(data)
            console.log(response);
            alert("Đăng kí thành công")
            navigate('/login')

        } catch (err) {
            console.log(err);

        }

    }

    return (

        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className=" flex  bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#F8F8F8] dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
                                <input

                                    type="text" {...register("Name")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.Name && errors.Name.message}
                                </p>

                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                                <input

                                    type="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.email && errors.email.message}
                                </p>

                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password")} />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.password && errors.password.message}
                                </p>

                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm Password</label>
                                <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("confirmPassword")} />

                                <p className='text-red-600 text-[10px]'>
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </p>
                            </div>

                            <button type="submit" className="w-full text-gray-900 bg-primary-600 bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng Kí</button>
                            <div>
                                <p className="text-center">Hoặc đăng nhập bằng</p>
                                <div className="flex justify-center mt-4 gap-5">
                                    <a href=""><img src="./fac.png" alt="" /></a>
                                    <a href=""><img src="./google.png" alt="" /></a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bg-[#F8F8F8] flex justify-center items-center mx-16">
                        <img src="./logo.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Signup