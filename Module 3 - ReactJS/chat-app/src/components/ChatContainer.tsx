import { Socket } from "socket.io-client"
import { Message, User } from "../types"
import { useEffect, useState } from "react"

interface ChatContainerProps {
    socket: Socket,
    selectedUser: User | undefined,
    currentUser: User,
    userList: User[]
}

function ChatContainer({ socket, currentUser, selectedUser, userList }: ChatContainerProps) {

    const [messages, setMessages] = useState<Array<Message>>([])
    const [text, setText] = useState<string>('')
    const [toast, setToast] = useState<string>('')
    useEffect(() => {

        socket.on('messageList', (messages: Message[]) => {
            console.log("RECEIVE MESSAGE")
            setMessages(messages)
        })
        socket.on('newMessage', (message: Message) => {
            console.log('newMessage', { message, currentUser, selectedUser })
            if (message.from === currentUser.id || message.from === selectedUser?.id) {
                setMessages(prevMessage => [...prevMessage, message])
            } else {
                // not my message [skip, will be fixed by backend]
                const user = userList.find(user => user.id === message.from);
                console.log('user', user)
                if (user) {
                    setToast(`${user.name}: ${message.text}`)
                    setTimeout(() => {
                        setToast('')
                    }, 3000)
                }
            }
        })

        return () => {
            socket.off('messageList')
            socket.off('newMessage')
        }
    }, [userList, selectedUser])

    useEffect(() => {
        // listMessage => {from, to} => from:currentUser, to: selectedUser 
        console.log("Change friend", selectedUser)
        if (selectedUser) {
            socket.emit('getMessages', {
                from: currentUser.id,
                to: selectedUser.id
                // "from": "d18b1b90-d47f-45c2-92be-2af7863bc009",
                // "to": "c0dd8490-f7b8-49e9-9ad8-85ce8a0bb788",
            })
        }
    }, [selectedUser])

    const handleSendMessage = () => {
        socket.emit('sendMessage', {
            from: currentUser.id,
            to: selectedUser?.id,
            text
        })
    }


    return <div className="w-9/12">
        {/* 17:20 */}
        {toast && <div id="toast-default" className=" fixed top-1.5 right-1.5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                </svg>
                <span className="sr-only">Fire icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{toast}</div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>}




        {!selectedUser ? <div className="flex h-screen justify-center items-center">
            <h3> Please select a friend to chat!</h3>
        </div> :
            <div className='h-screen flex-col flex'>
                <div className="h-full flex flex-col justify-end border-b-2 p-2">
                    {messages.map((message, index) => {
                        return <div key={`message_${Math.random()}_${index}`} className={`${message.from === currentUser.id ? 'ms-auto' : 'me-auto'} mt-2 p-2 bg-blue-500 rounded-md text-white`}>
                            {/* My message */}
                            {message.text}
                        </div>
                    })}


                </div>
                <div className='py-4 px-2 flex'>
                    <input value={text} onChange={(e) => setText(e.target.value)} className='w-full outline-none' placeholder='Type something' />
                    <button onClick={handleSendMessage} className="w-1/12 bg-blue-500 text-white p-2 rounded-md">Send</button>
                </div>
            </div>
        }
    </div>
}
export default ChatContainer