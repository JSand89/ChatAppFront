import React, { useContext } from 'react'
import { ChatSelect } from '../components/ChatApp/ChatSelect'
import { InboxPeople } from '../components/ChatApp/InboxPeople'
import { Messages } from '../components/ChatApp/Messages'
import { ChatContext } from '../context/chat/ChatContext'

import '../css/chat.css'

function ChatPages() {

    const {chatState} = useContext(ChatContext)

    return (
        <div className="messaging">
        <div className="inbox_msg">

            <InboxPeople/>
            {
                (chatState.chatActive)
                ?<Messages/>
                :<ChatSelect/>   
            }
           
           

        </div>


    </div>
    )
}

export default ChatPages
