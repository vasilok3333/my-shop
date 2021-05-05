import { SHOW_LOGIN, SHOW_REGISTR, CHANGE_AUTH } from "../types";



export const showLoginModal = () => ({
    type: SHOW_LOGIN,
})

export const showRegistrModal = () => ({
    type: SHOW_REGISTR,
})

export const changeAuth = (login) => ({
    type: CHANGE_AUTH,
    login,
})




  


  