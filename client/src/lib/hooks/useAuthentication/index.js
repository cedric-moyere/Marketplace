import * as Realm from "realm-web";
import { app } from '../../mongoDB-sdk'
import { addUser, getUser } from '../../service'
import { handleLogin, handleAuthenticationError, handleLogout } from '../../state/actions/authentication'

const useAuthentication = (dispatch) => { 
    function handleUserRegistration(user) { 
        return new Promise(resolve => { 
            app.emailPasswordAuth
                .registerUser(user.email, user.password)
                .then(async () => { 
                    app.logIn(Realm.Credentials.emailPassword(user.email, user.password))
                        .then(() => { 
                            addUser(user)
                            dispatch(handleLogin(user))
                            resolve(user)  
                        })
                })
                .catch(err => dispatch(handleAuthenticationError(err)))
            })
    }
    function handleUserLogin(email, password) { 
        return new Promise(async (resolve) => {
            getUser(email, password)
                .then(userProfile => { 
                    dispatch(handleLogin({email, password}))
                    resolve(userProfile)
                })
                .catch(err => dispatch(handleAuthenticationError(err)))
            })
    } 
    async function handleUserLogout() {
        localStorage.removeItem("user")
        dispatch(handleLogout())
    }
    async function handleAuthentication(user) {
        getUser(user?.email, user?.password)
            .then(userProfile => dispatch(handleLogin(userProfile)))
            .catch(err =>  dispatch(handleAuthenticationError(err)))
    }
    return {
        handleUserRegistration,
        handleUserLogin,
        handleUserLogout, 
        handleAuthentication    
    }
}
export default useAuthentication
