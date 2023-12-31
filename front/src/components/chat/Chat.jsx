import { useRef, useState,useEffect } from "react"


export default function Chat({socket}){
    console.log(socket);
    const messageRef = useRef();    
    const[messageList,setMessageList]=useState([]);
    useEffect(()=>{
        socket.on('received_message',data=>{
            setMessageList((current)=> [...current,data]);
        })

        return () => socket.off('received_message')
    },[socket])
     function handleSubmit(){
        const message = messageRef.current.value;
        if(!message.trim()) return;
         socket.emit('message', message);
        clearInput()
    }
    const clearInput = () =>{
        messageRef.current.value = '';
    }
    return(
        
        <div className="chat">
           
            <div className="messages">
            {
                messageList.map((message,index)=>(
                <p key={index} className={message.authorId === socket.id? "author":"other"}>{message.author}{message.text}</p>
                ))
            }
            </div>
           
            <div className="sendinput">
            <input type="text" ref={messageRef} placeholder="Mensagem"/>
            <button onClick={handleSubmit}>Enviar</button>
            </div>
           
        </div>
    )
}