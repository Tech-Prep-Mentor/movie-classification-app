import axios from "axios"

export const registerAPI = async (userData) =>{
    const response = await axios.post("http://localhost:8000/api/v1/users/register", {
        username: userData.username,
        password: userData.password,
        email: userData.email
    },{
        withCredentials: true //as soon as we register, it's goinf to set
        //a cookie inside the user's browser
    })
    return response.data //data the server sent back
}

