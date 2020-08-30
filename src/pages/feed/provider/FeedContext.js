import React, { createContext } from "react"
import { useState } from "reinspect"

import produce from 'immer'

const FeedContext = createContext();

const FeedProvider = (props) => {
    const initialState = {
        posts: []
    }

    const [state, setState] = useState(initialState, "Feed");
    const immerSetState = newState => setState(currentState => produce(currentState, newState));
    const contextValue = [state, immerSetState];

    return <FeedContext.Provider value={contextValue} {...props} />;
}

export { FeedProvider, FeedContext };
