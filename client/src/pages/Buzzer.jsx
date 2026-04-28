import { useState, useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import DOMPurify from 'dompurify';

function Buzzer() {
    const [socketUrl, setSocketUrl] = useState('wss://localhost:1864');
    const [username, setUsername] = useState('');
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [messageHistory, setMessageHistory] = useState < MessageEvent < any > [] > [];

    useEffect(() => {
        if (lastMessage !== null) {
        setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage]);

    function sendUsername()
    {
        sendMessage(username);
    }

    function buzzIn()
    {
        sendMessage(username);
    }

    return (
        <>
            {username=='' && 
            (
                <form id="usernameForm">
                    <input type="text" value={username} onChange={e=>setUsername(DOMPurify(e.target.value))} placeholder="Enter Name" required/>
                    <input type="submit" value="Join" onClick={sendUsername()} />
                </form>
            )}

            {username != '' &&
            (
                <button id="buzzer" onClick={buzzIn()} />
            )
            }
        </>
    );

}