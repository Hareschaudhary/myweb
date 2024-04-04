import * as Yup from "Yup"

const Yupform =Yup.object({
    name: Yup.string(3).min.max(25).required("enter your name"),
})
export default Yupform