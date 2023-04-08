import { useState } from 'react';


interface userModel{
    email: string,
    password: string
}

const initialState : userModel = {email:"", password:""}

const useLogin = () => {
    const [user, setUser] = useState(initialState);

    const login = () => {
        //llamada al login y redirect al dashboard
    }
    
    return {}
}

export default useLogin
