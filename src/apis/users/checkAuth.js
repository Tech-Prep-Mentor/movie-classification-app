import axios from "axios"
export const checkAuth = async () =>{
    const response = await axios.get("http://localhost:8000/api/v1/users/auth/check",
    {
        withCredentials: true //as soon as we register, it's goinf to set
        //a cookie inside the user's browser
    })
    return response.data //data the server sent back
}
