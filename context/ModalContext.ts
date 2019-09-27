import React from 'react'

interface Context {
    togglePremiumModal: (value: boolean) => any
    toggleSignInModal: (value: boolean) => any
}

const ModalContext = React.createContext<Context>
    ({
        togglePremiumModal: (value: boolean) => { },
        toggleSignInModal: (value: boolean) => { }
    })

export const ModalProvider = ModalContext.Provider
export const ModalConsumer = ModalContext.Consumer

export default ModalContext