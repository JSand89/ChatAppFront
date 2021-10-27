import React, { useContext} from 'react'
import { ChatContext } from '../../context/chat/ChatContext'
import { fetcConToken } from '../../helpers/fetch'
import { scrollToBottom } from '../../helpers/scrollToBottom'
import { types } from '../../types/types'

export const SidebarChatItem = ({user}) => {

    const { dispatch, chatState} = useContext(ChatContext)
    const {chatActive}=chatState

    const onClick = async () =>{
        dispatch({
            type: types.activeChat,
            payload:user.uid
        })

        //load chats
        console.log(user) 

        const resp = await fetcConToken(`mensajes/${user.uid}`);
       // console.log(resp.mensajes)

        dispatch({
            type: types.loadChat,
            payload: resp.mensajes
        })
        scrollToBottom('messages')

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
