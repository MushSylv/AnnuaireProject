import { combineForms } from 'react-redux-form';
import authReducer, { defaultAuthState } from './authReducer/auth.reducer'

export const defaultRootState = {
    authReducer: defaultAuthState,
}

const rootReducer = combineForms({
    authReducer,
})

export default rootReducer