import axios from "axios"

export const loginAPI = async (userData) =>{
    const response = await axios.post("http://localhost:8000/api/v1/users/login", {
        password: userData.password,
        email: userData.email
    },{
        withCredentials: true //as soon as we register, it's goinf to set
        //a cookie inside the user's browser
    })
    return response.data //data the server sent back
}

export const logoutAPI = async (userData) =>{
    const response = await axios.post("http://localhost:8000/api/v1/users/logout", {
    },{
        withCredentials: true //as soon as we register, it's goinf to set
        //a cookie inside the user's browser
    })
    return response.data //data the server sent back
}

export const getUserProfileAPI = async () =>{
    const response = await axios.get("http://localhost:8000/api/v1/users/user-profile", 
        {withCredentials: true //as soon as we register, it's goinf to set
        //a cookie inside the user's browser
    })
    return response.data //data the server sent back
}

export const generateConent = async(value) => {
    const prompt = value.prompt
    const tone = value.tone
    const idea = prompt + "Answer in" + tone + "way"
    const response = await axios.post("http://localhost:8000/api/v1/openai/generate", {prompt: idea}, {
        withCredentials: true
    })
    return response.data
}
