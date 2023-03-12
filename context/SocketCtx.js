import React, { createContext } from 'react';
import { io } from 'socket.io-client';

const socket = io('https://storytell.onrender.com/'),
  SocketContext = createContext(socket);

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
export { SocketContext, SocketProvider };
