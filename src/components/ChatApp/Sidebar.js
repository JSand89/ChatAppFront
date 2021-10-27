import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContex'
import { ChatContext } from '../../context/chat/ChatContext'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {


    const {chatState} = useContext(ChatContext)
    const {auth} = useContext(AuthContext)
    const {uid} = auth;

    //console.log(chatState)

    return (
        <div className="inbox_chat">
            
        {
        chatState.users
        .filter( user=> uid !== user.uid)
        .map( (user) => (

            <SidebarChatItem 
            key={user.uid}
            user={user}
            />

        ))       
        }
  
        <div className="extra_space"></div>


    </div>
    )
}
