import { useState } from 'react'
import { ChatInput  } from './components/ChatInput'
import {ChatMessages }  from './components/ChatMessages'


import './App.css'




function App() {

          const [chatMessages, setChatMessages] = useState([{
            message: 'hello chatbot',
            sender: 'user',
            id : 'id1'
          },
          {
            message: 'hello how can i help',
            sender: 'robot',
            id : 'id2'
          },
          {
            message:'Hello chatbot2', 
            sender:'user',
            id : 'id3'

          }
          ]
          
          );
          
          return (
            <div className="app-container">
                  

                  <ChatMessages 
                    chatMessages={chatMessages}
                  />
                  <ChatInput 
                     chatMessages={chatMessages}
                     setChatMessages={setChatMessages}
                   /> 
                  
            </div>
          );
        }


export default App
