import { types } from "../../types/types";


// initialState ={
//     uid:'',
//     chatActive:null,//uid usuario, toca mirar para cambiar a sala al que le quiero enviar mensajes
//     users:[],
//     messages:[],
// }

export const chatReducer = (state,action) =>{

    switch (action.type) {

        case types.SessionOut:
            return{
            uid:'',
            chatActive:null,
            users:[],
            messages:[],
            }

        case types.usuariosCargados:
            return {
                ...state,
                users:[...action.payload]
            }
        case types.activeChat:

            if(state.activeChat===action.payload) return state;
                return{
                    ...state,
                    chatActive:action.payload,
                    messages:[]
                }
        case types.newMessage:
            if (state.chatActive === action.payload.de ||
                state.chatActive === action.payload.to){
                return{
                    ...state,
                    messages:[...state.messages,action.payload]
                }
            }else{
                return state;
            }
                
        case types.loadChat:
            return{
                ...state,
                messages:[...action.payload]
            }

        default:
            return state;
    }
}