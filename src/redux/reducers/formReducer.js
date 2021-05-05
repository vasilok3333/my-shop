import { SHOW_LOGIN, SHOW_REGISTR, CHANGE_AUTH} from "../types.js";

export const formReducer = (
  state = {isLoginForm: false, isRegistrForm: false, isLogged: false},
  action
) => {
    switch (action.type) {
        case SHOW_LOGIN:
            return {
                ...state,
                isLoginForm: !state.isLoginForm,
            };
        case SHOW_REGISTR:
            return {
                ...state,
                isRegistrForm: !state.isRegistrForm,
            };
        case CHANGE_AUTH:
            return {
                ...state,
                isLogged: !state.isLogged,
                login: action.login,
            }
        
    }
  return state;
};
