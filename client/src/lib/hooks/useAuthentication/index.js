import { addUser, getUser } from '../../service'
import { handleLogin, handleAuthenticationError, handleLogout } from '../../state/actions/authentication'

const useAuthentication = (dispatch) => { 
    function handleUserRegistration(user) { 
        return new Promise(resolve => { 
            addUser(user)
                .then(usr => {
                    dispatch(handleLogin(usr))
                    resolve(usr)
                })
        }).catch(err => dispatch(handleAuthenticationError(err)))
    }
    function handleUserLogin(email, password) { 
        return new Promise(async (resolve) => {
            getUser(email, password)
                .then(userProfile => { 
                    dispatch(handleLogin(userProfile))
                    resolve(userProfile)
                })
                .catch(err => dispatch(handleAuthenticationError(err)))
            })
    } 
    async function handleUserLogout() {
        localStorage.removeItem('user')
        localStorage.removeItem('items')
        localStorage.removeItem('total')
        dispatch(handleLogout())
    }
    function handleAuthentication(user) {
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
