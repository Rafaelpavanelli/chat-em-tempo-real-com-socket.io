import { useState} from 'react'
import Join from './components/join/join'
import Chat from './components/chat/Chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const[socket,setSocket]=useState(null);
  return (
    <>
     <div className='app'>
      {
        chatVisibility?<Chat socket={socket}/>: <Join setChatVisibility={setChatVisibility} setSocket={setSocket}/>
      }
     </div>
    </>
  )
}

export default App
