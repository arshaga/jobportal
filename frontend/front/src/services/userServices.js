import axiosPrivate from "axios"

export const userUserServices =()=>{

    const loginUser = async(data) =>
    {
        const response = await axiosPrivate
        .post('/user/login',data)
        return response.data
    }
    return{
        loginUser,
    }
}
