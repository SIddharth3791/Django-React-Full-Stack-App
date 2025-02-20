
import Form from "../components/form";

function Register(){

    let Final_Route = import.meta.env.VITE_USER_REGISTER_ENDPOINT
    return(
        <Form route={Final_Route} method={"register"} />
    )
}

export default Register;