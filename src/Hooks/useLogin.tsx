import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface userModel{
    email: string,
    password: string
}

const initialState : userModel = {email:"", password:""}

const useLogin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const login = () => {
        //llamada al login y redirect al dashboard
        console.log(user)
        navigate("/dashboard")
    }
    
    return {user, setUser, login}
}

export default useLogin
