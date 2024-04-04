import * as Yup from "yup"

const ValidationSchema=Yup.object({
    email: Yup.string().email().required(""),
    password: Yup.string().min(6).required(""),
    // repeat_password: Yup.string().oneOf([Yup.ref("floating_password"),null],"password must match").required("conform password"),
    name: Yup.string().min(2).max(22).required(""),
    username: Yup.string().min(2).max(20).required(""),
    // floating_phone: Yup.string().min(10).max(10).required("enter your phone number "),
    // floating_company: Yup.string().min(3).max(25).required("company name (ex google)")
})

export default ValidationSchema