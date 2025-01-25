import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveChat, sendMessage, markAsRead } from '../../redux/features/chatSlice';

const ChatInterface = () => {
    const dispatch = useDispatch();
    const { chats, messages, activeChat } = useSelector((state) => state.chat);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const activeChatData = chats.find((chat) => chat.id === activeChat);

    const scrollToBottom = (instant = false) => {
        messagesEndRef.current?.scrollIntoView({ 
            behavior: instant ? "instant" : "smooth" 
        });
    };

    // Scroll to bottom instantly when chat changes, smoothly when messages change
    useEffect(() => {
        scrollToBottom(true);
    }, [activeChat]);

    useEffect(() => {
        if (messages.length > 0) {
            scrollToBottom(false);
        }
    }, [messages]);

    const handleChatSelect = (chatId) => {
        dispatch(setActiveChat(chatId));
        dispatch(markAsRead(chatId));
    };

    const handleCloseChat = () => {
        dispatch(setActiveChat(null));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            dispatch(sendMessage(newMessage));
            setNewMessage('');
        }
    };

    const renderBlankState = () => (
        <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-[#1E1E1E] text-center px-4">
            <div className="max-w-md">
                <h2 className="text-2xl font-semibold text-[#CCCCCC] mb-2">Welcome to Gossip</h2>
                <p className="text-[#808080]">Select a chat from the left to start gossiping with your friends!</p>
            </div>
        </div>
    );

    const renderChatSection = () => (
        <div className="flex-1 flex flex-col bg-[#1E1E1E] h-full">
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2D2D2D] bg-[#252526]">
                <div className="flex items-center">
                    <button 
                        onClick={handleCloseChat}
                        className="md:hidden text-[#808080] hover:text-[#CCCCCC] p-2 -ml-2 mr-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <img
                        src={activeChatData?.avatar}
                        alt={activeChatData?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h2 className="font-medium text-[#CCCCCC]">{activeChatData?.name}</h2>
                        <p className="text-sm text-[#808080]">Online</p>
                    </div>
                </div>
                <button 
                    onClick={handleCloseChat}
                    className="hidden md:block text-[#808080] hover:text-[#CCCCCC] p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Messages container with flex-grow */}
            <div className="flex-1 flex flex-col justify-end min-h-0">
                {/* Messages scroll area */}
                <div className="overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[70%] rounded-lg p-3 ${
                                    message.sent
                                        ? 'bg-[#2B3647] text-[#CCCCCC]'
                                        : 'bg-[#333333] text-[#CCCCCC]'
                                }`}
                            >
                                <p>{message.text}</p>
                                <p className={`text-[10px] mt-1 text-right ${
                                    message.sent ? 'text-[#8B9BB4]' : 'text-[#808080]'
                                }`}>
                                    {message.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Message input - Fixed at bottom */}
            <div className="border-t border-[#2D2D2D] bg-[#252526]">
                <form onSubmit={handleSendMessage} className="p-4">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 rounded-full border border-[#2D2D2D] px-4 py-2 bg-[#1E1E1E] text-[#CCCCCC] placeholder-[#808080] focus:outline-none focus:border-[#404040]"
                        />
                        <button 
                            type="submit"
                            className="bg-[#37373D] text-[#CCCCCC] rounded-full px-6 py-2 hover:bg-[#2D2D2D] focus:outline-none"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-[#1E1E1E]">
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(128, 128, 128, 0.3);
                    border-radius: 20px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(128, 128, 128, 0.5);
                }

                /* For Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(128, 128, 128, 0.3) transparent;
                }
            `}</style>

            {/* Left sidebar - Chat list */}
            <div className={`${activeChat ? 'hidden md:block' : 'block'} w-full md:w-1/4 border-r border-[#2D2D2D] bg-[#252526]`}>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4 text-[#CCCCCC]">Chats</h2>
                    <div className="space-y-2 custom-scrollbar">
                        {chats.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => handleChatSelect(chat.id)}
                                className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] ${
                                    activeChat === chat.id ? 'bg-[#37373D]' : ''
                                }`}
                            >
                                <img
                                    src={chat.avatar}
                                    alt={chat.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="ml-3 flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-medium text-[#CCCCCC]">{chat.name}</h3>
                                        {chat.unread && (
                                            <span className="bg-[#569CD6] w-2 h-2 rounded-full"></span>
                                        )}
                                    </div>
                                    <p className="text-sm text-[#808080] truncate">{chat.lastMessage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right section - Active chat or blank state */}
            <div className={`${activeChat ? 'block' : 'hidden md:block'} flex-1`}>
                {activeChat ? renderChatSection() : renderBlankState()}
            </div>
        </div>
    );
};

export default ChatInterface;
