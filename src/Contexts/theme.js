import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [theme, setTheme] = useState(true);

    return(
        <AuthContext.Provider value={{theme, setTheme}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;