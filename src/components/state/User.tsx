import { useState } from "react"
type AuthUser = {
    name: String,
    email: String,
}
export const User = () => {
    const [ user, setUser ] = useState<AuthUser>( {} as AuthUser );
    const handleLogin = () => {
        setUser({
            name: 'Sahaj',
            email: 'Sahaj@wsahaj.com',
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>            
        </div>
    )
}

