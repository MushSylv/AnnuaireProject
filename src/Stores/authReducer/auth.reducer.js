import { AUTH_ACTIONS } from './auth.action';

export const defaultAuthState = {
    isConnected: false,
    isOpened: false,
    isInvalid: false,
}

const authReducer = (state = defaultAuthState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.OPEN:
            return { ...state, isOpened: true }
    
        case AUTH_ACTIONS.CLOSE:
            return { ...state, isOpened: false }
            
        case AUTH_ACTIONS.CONNECTED:
            return { ...state, isOpened: false, isConnected: true }

        case AUTH_ACTIONS.DISCONNECTED:
            return defaultAuthState;

        case AUTH_ACTIONS.INVALID:
            return { ...state, isInvalid: true }
        default: 
            return defaultAuthState
    
    }
}

export default authReducer;