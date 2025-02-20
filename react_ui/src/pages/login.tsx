import Form from "../components/form";

function Login(){

    let Final_Route = import.meta.env.VITE_GET_ACCESS_TOKEN
    return(
        <Form route={Final_Route} method={"login"} />
    )
}

export default Login;