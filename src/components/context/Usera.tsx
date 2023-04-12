import { useContext } from "react"
import { UserContext } from "./UserContext"

export const Usera = () => {
    const userContext = useContext(UserContext);
    const handleLoin = () => {
        userContext.setUser({
            name: 'Sahaj',
            email: 'sahaj@sahaj.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null);
    }
    return (
        <>
            <br />
            <br />
            <br />
            <button onClick={handleLoin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>User Name is {userContext.user?.name}</h1>
            <h1>User Email is {userContext.user?.email}</h1>
        </>
    )
}