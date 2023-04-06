import * as Yup from 'yup'
// export interface Login {
//     email: string;
//     password: string;
// }
// export interface Signin {
//     email: string;
//     name: string;
//     password: string;

// }
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

export const signupSchema = Yup.object({
    Name: Yup.string().required("Trường dữ liệu bắt buộc"),

    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>