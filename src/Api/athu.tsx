import { SigninForm, SignupForm } from "../interfaces/auth";
import instance from "./config";
const Login_user = (data: SigninForm) => {
    return instance.post('/signin', data)
}
const Get_user = () => {
    return instance.get('/users')
}
const Sig_nup = (data: SignupForm) => {
    return instance.post('/signup', data)
}
export { Login_user, Sig_nup, Get_user }