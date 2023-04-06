import { SigninForm, SignupForm } from "../interfaces/auth";
import instance from "./config";
const Login_user = (data: SigninForm) => {
    return instance.post('/signin', data)
}
const Sig_nup = (data: SignupForm) => {
    return instance.post('/signup', data)
}
export { Login_user, Sig_nup }