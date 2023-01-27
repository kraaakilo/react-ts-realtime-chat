import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import ChatPage from "./components/ChatPage";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatPage/>
  </React.StrictMode>,
)
