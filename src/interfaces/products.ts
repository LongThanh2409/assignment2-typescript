import * as Yup from 'yup'

export interface IProduct {
    id: string,
    name: string,
    categorys: string
    price: number,
    original_price: number,
    description: string,
    images: Images[],
    brand: { id: number, name: string, slug: string }
    specifications: ISpecification[]

}
export interface Images {
    map(arg0: (image: any) => JSX.Element): import("react").ReactNode;

    base_url: string;
    is_gallery: boolean;
    label: string | null;
    large_url: string;
    medium_url: string;
    position: number | null;
    small_url: string;
    thumbnail_url: string;

}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}
export interface IBrand {
    map(arg0: (brand: any) => JSX.Element): import("react").ReactNode;

}

export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.array().of(
        Yup.object().shape({
            base_url: Yup.string(),
            // is_gallery: Yup.boolean(),
            // label: Yup.string(),
            // large_url: Yup.string(),
            // medium_url: Yup.string(),
            // position: Yup.number(),
            // small_url: Yup.string(),
            // thumbnail_url: Yup.string()
        })
    ),
    brand:
        Yup.object().shape({

            name: Yup.string().required("TRường dữ liệu bắt buộc"),

        }),


    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),

})

export type updateForm = Yup.InferType<typeof updateSchema>

// thêm
export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.array().of(
        Yup.object().shape({
            base_url: Yup.string(),
            // is_gallery: Yup.boolean(),
            // label: Yup.string(),
            // large_url: Yup.string(),
            // medium_url: Yup.string(),
            // position: Yup.number(),
            // small_url: Yup.string(),
            // thumbnail_url: Yup.string()
        })
    ),
    brand: Yup.array().of(
        Yup.object().shape({
            id: Yup.string(),
            name: Yup.string(),

        })
    ),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type addForm = Yup.InferType<typeof addSchema>

