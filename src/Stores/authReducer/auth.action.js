import { auth } from "../../Services/api.auth.service";

export const AUTH_ACTIONS = {
    OPEN: "AUTH_ACTIONS/OPEN",
    CLOSE: "AUTH_ACTIONS/CLOSE",
    CONNECTED: "AUTH_ACTIONS/CONNECTED",
    DISCONNECTED: "AUTH_ACTIONS/DISCONNECTED",
    INVALID: "AUTH_ACTIONS/INVALID",
  };

export const openAction = () => ({
    type: AUTH_ACTIONS.OPEN
});

export const closeAction = () => ({
    type: AUTH_ACTIONS.CLOSE
});

export const connectedAction = () => ({
    type: AUTH_ACTIONS.CONNECTED
});

export const disconnectedAction = () => ({
    type: AUTH_ACTIONS.DISCONNECTED
});

export const invalidAction = () => ({
    type: AUTH_ACTIONS.INVALID
});

export const authAction = (email, password) => async dispatch => {
    try {
        const data = await auth(email, password)
        if(data) {
            dispatch(connectedAction())
            return
        }
        dispatch(invalidAction())
    } catch {
        dispatch(invalidAction())

    }

}