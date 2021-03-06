// Importing functions to create and use a Context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a Context component
export const UserContext = createContext();

// Declare actions for this component
const UPDATE_USER = "UPDATE_USER";

// Declare an initial state for the Context component (i.e, the global state)
const initialState = {
    firstName: localStorage.getItem('firstName') || undefined,
    lastName: localStorage.getItem('lastName') || undefined,
    jsonwebtoken: localStorage.getItem('jsonwebtoken') || undefined,
    loggedIn: localStorage.getItem('firstName') ? true :false,
    email: localStorage.getItem('email') || undefined,
    phone: localStorage.getItem('phone') || undefined,
    address: localStorage.getItem('address') || undefined,
    avatar: localStorage.getItem('avatar') || undefined
}


// The reducer that will change the (global) state
const reducer = (state=false, action) => {
    if(action.type === UPDATE_USER) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// Create the Provider component
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Declare function to send payload to reducer
    const updateUser = useCallback(
        (payload) => {

            console.log(payload)
            // Set the values in the user's computer
            localStorage.setItem('firstName', payload.firstName);
            localStorage.setItem('lastName', payload.lastName);
            localStorage.setItem('email', payload.email);
            localStorage.setItem('address', payload.address);
            localStorage.setItem('phone', payload.phone);
            localStorage.setItem('avatar', payload.avatar);
            localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);


            dispatch(
                {
                    type: UPDATE_USER,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return (
        <UserContext.Provider 
            value={{
                firstName: state.firstName,
                lastName: state.lastName,
                address: state.address,
                jsonwebtoken: state.jsonwebtoken,
                loggedIn: state.loggedIn,
                avatar: state.avatar,
                email: state.email,
                phone: state.phone,
                updateUser
            }}
        >{children}
        </UserContext.Provider>
    )
};