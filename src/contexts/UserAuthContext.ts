import React from 'react'

const UserAuthContext = React.createContext({id: '', email: '', name: ''})
export const UserAuthProvider = UserAuthContext.Provider
export const UserAuthConsumer = UserAuthContext.Consumer

export default UserAuthContext