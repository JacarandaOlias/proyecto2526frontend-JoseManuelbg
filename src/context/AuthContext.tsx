import { createContext, useContext, useState } from 'react';
import type { ReactNode } from "react";
import type { User } from "../models/User";
import type { AuthResponse } from "../models/AuthResponse";

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (data:AuthResponse) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

//Provider

export const AuthProvider = ({children} : {children: ReactNode}) =>{
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login  = (data: AuthResponse) => {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

    }

    const logout = ()=> {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    return(
        <AuthContext.Provider value={{user,token,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("the provider failed");
    return context;
}
