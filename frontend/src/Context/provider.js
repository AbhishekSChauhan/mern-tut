import UserContext from './context'
function AuthProvider({children}){
    const data='Hello'

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )

}

export default AuthProvider