import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chats: [
        { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/40', lastMessage: 'Hey there!', unread: true },
        { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/40', lastMessage: 'See you tomorrow', unread: false },
        { id: 3, name: 'Mike Johnson', avatar: 'https://via.placeholder.com/40', lastMessage: 'Thanks!', unread: true },
    ],
    messages: [
        { id: 1, text: 'Hey, how are you?', sent: true, timestamp: '09:30 AM' },
        { id: 2, text: 'I\'m good, thanks! How about you?', sent: false, timestamp: '09:31 AM' },
        { id: 3, text: 'Doing great! Have you heard about the new project?', sent: true, timestamp: '09:32 AM' },
        { id: 4, text: 'No, what project?', sent: false, timestamp: '09:33 AM' },
        { id: 5, text: 'The new React-based chat application we\'re building', sent: true, timestamp: '09:34 AM' },
        { id: 6, text: 'Oh, that sounds interesting! Tell me more about it', sent: false, timestamp: '09:36 AM' },
        { id: 7, text: 'It\'s a modern chat app with real-time messaging capabilities', sent: true, timestamp: '09:37 AM' },
        { id: 8, text: 'Are we using any specific backend technology?', sent: false, timestamp: '09:39 AM' },
        { id: 9, text: 'We\'re planning to use Node.js with Socket.io', sent: true, timestamp: '09:40 AM' },
        { id: 10, text: 'That\'s a solid choice! When do we start?', sent: false, timestamp: '09:42 AM' },
        { id: 11, text: 'The kickoff meeting is next Monday', sent: true, timestamp: '09:43 AM' },
        { id: 12, text: 'Perfect! I\'ll prepare some ideas', sent: false, timestamp: '09:45 AM' },
        { id: 13, text: 'Great! We can discuss them during the meeting', sent: true, timestamp: '09:46 AM' },
        { id: 14, text: 'By the way, have you seen the new UI design?', sent: false, timestamp: '09:48 AM' },
        { id: 15, text: 'Yes, it looks amazing! Very modern and clean', sent: true, timestamp: '09:50 AM' },
        { id: 16, text: 'The dark theme is particularly impressive', sent: false, timestamp: '09:51 AM' },
        { id: 17, text: 'Agreed! It\'s easier on the eyes too', sent: true, timestamp: '09:52 AM' },
        { id: 18, text: 'Should we add any additional features?', sent: false, timestamp: '09:54 AM' },
        { id: 19, text: 'Maybe file sharing and voice messages?', sent: true, timestamp: '09:55 AM' },
        { id: 20, text: 'Those would be great additions!', sent: false, timestamp: '09:56 AM' },
    ],
    activeChat: 1, // ID of the active chat
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        sendMessage: (state, action) => {
            state.messages.push({
                id: state.messages.length + 1,
                text: action.payload,
                sent: true,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        },
        markAsRead: (state, action) => {
            const chat = state.chats.find(c => c.id === action.payload);
            if (chat) {
                chat.unread = false;
            }
        }
    }
});

export const { setActiveChat, sendMessage, markAsRead } = chatSlice.actions;
export default chatSlice.reducer; 