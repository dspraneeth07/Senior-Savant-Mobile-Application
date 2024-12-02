import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios'; // Or use socket.io-client for socket communication

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const rasaServerUrl = 'http://<YOUR_RASA_SERVER_URL>/webhooks/rest/webhook'; // Replace with your Rasa server URL

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

    try {
      const response = await axios.post(rasaServerUrl, {
        sender: 'user', // Unique user ID
        message: input,
      });

      const botMessages = response.data.map((msg) => ({
        text: msg.text,
        sender: 'bot',
      }));

      setMessages((prev) => [...prev, ...botMessages]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, I am unable to respond right now.', sender: 'bot' },
      ]);
    } finally {
      setInput('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  chatContainer: { padding: 10 },
  messageContainer: { marginVertical: 5, padding: 10, borderRadius: 10 },
  userMessage: { backgroundColor: '#DCF8C6', alignSelf: 'flex-end' },
  botMessage: { backgroundColor: '#ECECEC', alignSelf: 'flex-start' },
  messageText: { fontSize: 16 },
  inputContainer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#DDD' },
  input: { flex: 1, borderWidth: 1, borderColor: '#CCC', borderRadius: 20, padding: 10 },
  sendButton: { marginLeft: 10, justifyContent: 'center' },
  sendButtonText: { fontSize: 16, color: '#007BFF' },
});

export default ChatBotScreen;
