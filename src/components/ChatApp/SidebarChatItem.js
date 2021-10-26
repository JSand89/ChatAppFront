import React, { useContext, useReducer } from 'react'
import { ChatContext } from '../../context/chat/ChatContext'
import { types } from '../../types/types'

export const SidebarChatItem = ({user}) => {

    const { dispatch, chatState} = useContext(ChatContext)
    const {chatActive}=chatState

    const onClick =()=>{
        dispatch({
            type: types.activeChat,
            payload:user.uid
        })
    }

    return (
        <div 
        className={`chat_list ${(user.uid===chatActive) && 'active_chat'}` }
        onClick={onClick}
        >
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://thumbs.dreamstime.com/z/hombre-y-lentes-gr%C3%A1fico-de-avatar-de-vector-81929117.jpg" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{user.name}</h5>
                    {
                        (user.online)
                        ?<span className="text-success">Online</span>
                        :<span className="text-danger">Offline</span>

                    }
                </div>
            </div>
        </div>
    )
}
