import { useEffect, useContext, useState, createContext } from "react";
interface Data {
    token: string,
    setToken: any,
    signed: boolean;
};
export const AuthContext = createContext<Data>({} as Data);

const AuthProvider = (props: any) => {

    const [auth, setAuth] = useState('');
    const [checkLogin, setCheckLogin] = useState<boolean>(false);

    const user_token = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token !== null) {
                return token
            } else {
                return false
            }
        }
        catch (e) {
            console.log("Sem Token")
        }
    }

    useEffect(() => {
        user_token().then(value => {
            if (value) {
                setAuth(value)
            }
        })
    }, [])

    const checkIfIsLoggedIn = () => {
        if (auth != "") {
            setCheckLogin(true);
        }
        else {
            setCheckLogin(false)
        }
    }

    useEffect(() => {
        checkIfIsLoggedIn()
    }, [auth, checkLogin])

    return (
        <AuthContext.Provider value={{
            token: auth,
            setToken: setAuth,
            signed: checkLogin
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;