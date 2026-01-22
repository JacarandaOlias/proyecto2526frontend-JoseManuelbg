import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from "react";
import type { User } from "../models/User";
import type { AuthResponse } from "../models/AuthResponse";
import { jwtDecode } from 'jwt-decode';

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


    //Verify local storage
    useEffect(()=>{
        const t = localStorage.getItem("token");
        if(t){
            const pureToken = t.startsWith("Bearer ") ? t.slice(7) : t;
               try {
            const decoded: User = jwtDecode(pureToken);
            setToken(pureToken);
            setUser(decoded);
        } catch (err) {
            console.error("Token inválido en localStorage:", err);
            localStorage.removeItem("token");
            setToken(null);
            setUser(null);
        }
        }
    }, [])


    const login  = (data: AuthResponse) => {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token.startsWith("Bearer ") ? data.token.slice(7) : data.token);

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
