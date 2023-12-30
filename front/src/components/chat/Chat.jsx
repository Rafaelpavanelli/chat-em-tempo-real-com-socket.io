import { useRef, useState } from "react"


export default function Chat({socket}){
    const messageRef = useRef();    
    const[messageList,setMessageList]=useState([]);
    async function handleSubmit(){
        const message = messageRef.current.value;
        if(!message.trim()) return;
        
    }
    return(
        <div>
            <h1>Chat</h1>
            <input type="text" ref={messageRef} placeholder="Mensagem"/>
            <button>Enviar</button>
        </div>
    )
}