import { types } from "../../types/types";


// initialState ={
//     uid:'',
//     chatActive:null,//uid usuario, toca mirar para cambiar a sala al que le quiero enviar mensajes
//     users:[],
//     messages:[],
// }

export const chatReducer = (state,action) =>{

    switch (action.type) {

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

        default:
            return state;
    }
}