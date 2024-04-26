import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import PharmNav from './PharmNav';




const AlphaHealth = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

 // Load messages from local storage on component mount
 useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Save messages to local storage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return; // Don't send empty messages

    // Update state with user's message first
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');


    // Bot's responses based on user messages
    const botResponses = {
      'cancer': "Sorry please contact a specialist for that too huge for me to handle",
      'complaint': "Yes please go ahead to precisely type in your symptoms. I give tips on very common health complaints and symptoms. If you have more serious complaints go to the contact pharmacist page. Thank you !",
      'hello': "Hi there friend! I'm Alpha Health Bot. How can I be of help to you today ?",
      'health': "Remember to drink plenty of water and eat a balanced diet!",
      'excercise': "Regular exercise is important for your health. Try to be active every day!",
      'headache': "You may be dehydrated. Try drinking some water.",
      'tummy ache': "Avoid heavy or spicy foods. Try eating something light like bananas or toast.",
      'sleep': "Make sure you're getting enough sleep each night. Aim for 7-9 hours.",
      'bloated': "Avoid foods that cause bloating, such as beans, onions, and carbonated drinks.",
      'insomnia': "Establish a bedtime routine and limit screen time before bed.",
      'tooth ache': "Rinse your mouth with warm salt water and see a dentist if it persists.",
      'fever': "Rest, drink plenty of fluids, and take over-the-counter medication like acetaminophen.",
      'body pain': "Try applying heat or cold packs to the affected area and consider gentle stretching.",
      'dizziness': "Sit or lie down and drink water slowly. Avoid sudden movements.",
      'loss of appetite': "Eat smaller, more frequent meals and try to include nutrient-rich foods.",
      'eye pain': "Rest your eyes and avoid screens for a while. If it persists, consult an eye doctor.",
      'leg pain': "Elevate your legs and apply ice packs to reduce swelling. Avoid standing for long periods.",
      'back pain': "Practice good posture, use ergonomic furniture, and consider exercises to strengthen your core muscles.",
    };

    // Check if the user message matches any predefined messages
    const lowercaseInput = inputValue.toLowerCase();
    let botResponse = botResponses[lowercaseInput];
    if (!botResponse) {
      botResponse = "I'm sorry, I didn't understand that. Can I help you with anything else?";
    }

    // Simulating bot response
    setTimeout(() => {
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  const handleRefresh = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (

    <div>
        <NavBar />
        <PharmNav/>

        <div class="mx-auto max-w-2xl mt-1 text-center">
      <h2 class="text-3xl mt-8 font-bold tracking-tight text-basegreen sm:text-4xl">Meet Alpha Health Bot</h2>
      <p class="mt-4 text-lg leading-8 text-gray-600">Experience quick and quality tips our health bot has to offer. Simply type in your symptoms or illness in lowercase and get a quick response from the bot.  </p>
    </div>

   
    <div className="w-full max-w-md mx-auto flex flex-col h-screen mt-4">
    
      <div className="flex-1 flex flex-col bg-gray-300 p-4 overflow-y-auto rounded-md">
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`bg-basegreen text-white rounded-lg p-2 max-w-xs break-words my-1 ${
                message.sender === 'user' ? 'ml-auto' : 'mr-auto'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex p-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 bg-gray-300 rounded-full px-4 py-2 focus:outline-basegreen focus:ring focus:border-basegreen"
        />
        <button
          type="submit"
          className="ml-2 bg-basegreen text-white px-4 py-2 rounded-full hover:bg-fontgreen focus:outline-none focus:ring focus:border-blue-300"
        >
          Send
        </button>
      </form>
      <button
        onClick={handleRefresh}
        className="mt-2 bg-basegreen text-white px-2 py-1 rounded-full hover:bg-fontgreen focus:outline-none focus:ring focus:border-blue-300"
      >
        Refresh Chat
      </button>
    </div>
    </div>
  );
};

export default AlphaHealth;