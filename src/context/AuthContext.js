import React, { createContext } from "react"
import { useState } from "reinspect"

import produce from 'immer'

const AuthContext = createContext();

const AuthProvider = (props) => {
    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || null
    }

    const [state, setState] = useState(initialState, "Auth");
    const immerSetState = newState => setState(currentState => produce(currentState, newState));
    const contextValue = [state, immerSetState];

    return <AuthContext.Provider value={contextValue} {...props} />;
}

export { AuthProvider, AuthContext };
