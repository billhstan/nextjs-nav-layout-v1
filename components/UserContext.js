import * as React from 'react'

const UserContext = React.createContext()

function userReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return {user: {email:'gritia.aliana.arin@yahoo.com.sg'}}
    }
    case 'logout': {
      return {user: null}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({children}) {
  const [state, dispatch] = React.useReducer(userReducer, {user: null})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export {UserProvider,useUser }