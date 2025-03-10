import React, { useState } from 'react';
import './Message.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'
import Setting from '../assets/settings.png'

function Message() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({}); // Store messages for each chat
  const [activeTab, setActiveTab] = useState('chats');
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', lastMessage: 'Hello!', unread: 2, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:00 AM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Hi there!', unread: 0, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:05 AM' },
    { id: 3, name: 'Alice Johnson', lastMessage: 'How are you?', unread: 1, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:10 AM' },
  ]);
  const [groups, setGroups] = useState([
    { id: 1, name: 'Work Group', lastMessage: 'Meeting at 3 PM', unread: 0, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:15 AM' },
    { id: 2, name: 'Family Group', lastMessage: 'Dinner tonight?', unread: 3, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:20 AM' },
  ]);
  const [community, setCommunity] = useState([
    { id: 1, name: 'Neighborhood', lastMessage: 'Event on Saturday', unread: 0, profileImg: 'https://via.placeholder.com/50', lastMessageTime: '10:25 AM' },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDp, setNewDp] = useState('');

  const handleSend = () => {
    if (message.trim() && selectedChat) {
      const newMessage = {
        id: messages[selectedChat.id] ? messages[selectedChat.id].length + 1 : 1,
        text: message,
        sender: 'sent',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent', // Initial status
      };

      // Update messages for the selected chat
      const updatedMessages = {
        ...messages,
        [selectedChat.id]: [...(messages[selectedChat.id] || []), newMessage],
      };
      setMessages(updatedMessages);
      setMessage('');

      // Update last message in the chat list
      const updatedChats = chats.map((chat) =>
        chat.id === selectedChat.id
          ? { ...chat, lastMessage: message, lastMessageTime: newMessage.time }
          : chat
      );
      setChats(updatedChats);

      // Simulate message delivery after 2 seconds
      setTimeout(() => {
        const deliveredMessages = updatedMessages[selectedChat.id].map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        );
        setMessages({
          ...updatedMessages,
          [selectedChat.id]: deliveredMessages,
        });
      }, 2000);
    }
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    // Initialize messages for the chat if not already present
    if (!messages[chat.id]) {
      setMessages({
        ...messages,
        [chat.id]: [
          { id: 1, text: `Welcome to ${chat.name}!`, sender: 'received', time: '10:00 AM', status: 'delivered' },
        ],
      });
    }
  };

  const handleAddChat = () => {
    const newChat = {
      id: chats.length + 1,
      name: `New Chat ${chats.length + 1}`,
      lastMessage: 'New message',
      unread: 1,
      profileImg: 'https://via.placeholder.com/50',
      lastMessageTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setChats([...chats, newChat]);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleProfileClick = () => {
    setShowSettings(true);
    setNewName(selectedChat?.name || '');
    setNewDp(selectedChat?.profileImg || '');
  };

  const handleSaveSettings = () => {
    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat.id ? { ...chat, name: newName, profileImg: newDp } : chat
    );
    setChats(updatedChats);
    setSelectedChat({ ...selectedChat, name: newName, profileImg: newDp });
    setShowSettings(false);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div>
  <Headerall/>
    <div className="app">
      {/* Sidebar */}
      {(!selectedChat || window.innerWidth > 768) && (
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>Message</h3>
          </div>
          <div className="sidebar-tabs">
            <button
              className={activeTab === 'chats' ? 'active' : ''}
              onClick={() => setActiveTab('chats')}
            >
              Chats
            </button>
            <button
              className={activeTab === 'groups' ? 'active' : ''}
              onClick={() => setActiveTab('groups')}
            >
              Groups
            </button>
            <button
              className={activeTab === 'community' ? 'active' : ''}
              onClick={() => setActiveTab('community')}
            >
              Community
            </button>
          </div>
          <div className="sidebar-content">
            {activeTab === 'chats' && (
              <>
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search chats..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <div className="chats-list">
                  {filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
                      onClick={() => handleChatClick(chat)}
                    >
                      <img src={chat.profileImg} alt="Profile" className="profile-img" />
                      <div className="chat-info">
                        <span className="chat-name">{chat.name}</span>
                        <span className="chat-last-message">{chat.lastMessage}</span>
                      </div>
                      <div className="chat-time">{chat.lastMessageTime}</div>
                      {chat.unread > 0 && (
                        <span className="unread-count">{chat.unread}</span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeTab === 'groups' && (
              <div className="groups-list">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className={`chat-item ${selectedChat?.id === group.id ? 'active' : ''}`}
                    onClick={() => handleChatClick(group)}
                  >
                    <img src={group.profileImg} alt="Profile" className="profile-img" />
                    <div className="chat-info">
                      <span className="chat-name">{group.name}</span>
                      <span className="chat-last-message">{group.lastMessage}</span>
                    </div>
                    <div className="chat-time">{group.lastMessageTime}</div>
                    {group.unread > 0 && (
                      <span className="unread-count">{group.unread}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'community' && (
              <div className="community-list">
                {community.map((comm) => (
                  <div
                    key={comm.id}
                    className={`chat-item ${selectedChat?.id === comm.id ? 'active' : ''}`}
                    onClick={() => handleChatClick(comm)}
                  >
                    <img src={comm.profileImg} alt="Profile" className="profile-img" />
                    <div className="chat-info">
                      <span className="chat-name">{comm.name}</span>
                      <span className="chat-last-message">{comm.lastMessage}</span>
                    </div>
                    <div className="chat-time">{comm.lastMessageTime}</div>
                    {comm.unread > 0 && (
                      <span className="unread-count">{comm.unread}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="sidebar-footer">
            <button className="add-chat-button" onClick={handleAddChat}>
              + New Chat
            </button>
            <div className="sidebar-settings">
              <img src="https://via.placeholder.com/24" alt="Profile" className="icon" />
              <img src={Setting} alt="Settings" className="icon" />
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {selectedChat && (
        <div className="chat-window">
          <div className="chat-header">
            {window.innerWidth <= 768 && (
              <button className="back-button" onClick={handleBack}>
                ←
              </button>
            )}
            <img
              src={selectedChat.profileImg}
              alt="Profile"
              className="profile-img"
              onClick={handleProfileClick}
            />
            <span className="chat-name">{selectedChat.name}</span>
          </div>
          <div className="chat-messages">
            {messages[selectedChat.id]?.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <p>{msg.text}</p><br></br>
                <span className="message-time">
                  {msg.time} {msg.sender === 'sent' && (
                  <span className="message-status">
                      {msg.status === 'sent' ? '✓' : '✓✓'}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="settings-modal">
          <div className="settings-content">
            <h3>Edit Profile</h3>
            <div className="settings-form">
              <label>Name:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <label>Profile Picture URL:</label>
              <input
                type="text"
                value={newDp}
                onChange={(e) => setNewDp(e.target.value)}
              />
              <div className="settings-buttons">
                <button onClick={handleSaveSettings}>Save</button>
                <button onClick={() => setShowSettings(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Message;