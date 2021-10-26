import React,{createContext, useReducer} from 'react'
import { chatReducer } from './chatReducer'


export const ChatContext = createContext()

const initialState ={
    uid:'',
    chatActive:null,//uid usuario, toca mirar para cambiar a sala al que le quiero enviar mensajes
    users:[],
    messages:[],
}

export const ChatProvider = ({children}) => {
    
    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    ) 
}
