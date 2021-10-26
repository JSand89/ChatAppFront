import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';

import { AuthContext } from '../auth/AuthContex';
import { useSocket } from '../hooks/useSocket'
import { ChatContext } from './chat/ChatContext';

import { types } from '../types/types';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, desConnectSocket } = useSocket('http://localhost:8080');

    const {auth} = useContext(AuthContext);
    const {dispatch} =useContext( ChatContext);


    useEffect(()=>{
        if(auth.logged){
            connectSocket();
        }
    },[auth, connectSocket])

    useEffect(()=>{
        if(!auth.logged){
            desConnectSocket();
        }
    },[auth,desConnectSocket])

// listen user conected from back

    useEffect(()=>{

        socket?.on('list-users', (users)=>{
            dispatch({
                type:types.usuariosCargados,
                payload: users
            })        })

    },[socket,dispatch]);

    useEffect(()=>{

        socket?.on('list-tickets', (tickets)=>{
        console.log(tickets)       
        })

    },[socket]);
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}