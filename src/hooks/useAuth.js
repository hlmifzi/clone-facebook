import { useContext } from "react"
import { auth, provider } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const useAuth = () => {
    const [state, immerSetState] = useContext(AuthContext);

    const _handleSignIn = async () => {
        const res = await auth.signInWithPopup(provider)
        localStorage.setItem("user", JSON.stringify(res.user))
        immerSetState(draft => {
            draft.user = res.user
        })
    }

    return {
        state,
        _handleSignIn
    };
}

export default useAuth
