import React, { createContext, useState, useContext} from "react";

interface IAuthContext {
    logged: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem("@finance-tracker:logged");
       
        return !!isLogged;
    });

    const login = (email: string, password: string) => {
        if (email === 'teste@teste.com' && password === '123456') {
            localStorage.setItem("@finance-tracker:logged", "true");
            setLogged(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem("@finance-tracker:logged");
        setLogged(false);
    };

    return (
        <AuthContext.Provider value={{ logged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    
    return context;
}

export { AuthProvider, useAuth };