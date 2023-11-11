import {useEffect} from "react";

function WebSocketComponent({ onDataReceived }) {
    useEffect(() => {
        // Replace 'ws://your-backend-url' with the actual WebSocket endpoint
        const socket = new WebSocket('ws://your-backend-url');

        // Connection opened
        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened:', event);
        });

        // Listen for messages
        socket.addEventListener('message', (event) => {
            // Parse the incoming data as JSON
            const data = JSON.parse(event.data);
            console.log('Received data from WebSocket:', data);

            // Call the provided callback function with the received data
            onDataReceived(data);
        });

        // Connection closed
        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed:', event);
        });

        // Cleanup on component unmount
        return () => {
            socket.close();
        };
    }, [onDataReceived]);

    return null;
}

export default WebSocketComponent;