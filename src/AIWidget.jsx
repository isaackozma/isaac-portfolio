// src/AIWidget.jsx
import React, { useState } from 'react';
import './AIWidget.css';

function AIWidget() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("Thinking...");

    // Mock AI logic — feel free to add more responses
    setTimeout(() => {
      let reply = "Sorry, as of right now I don't have that answer, you can ask me about my interests, ai, how the website was built, experience, or skills I currently have.";

      if (input.toLowerCase().includes("project")) {
        reply = "My favourite project was leading a group of developers for a Food in space project, I managed a full development team and presented to an industry panel.";
      } else if (input.toLowerCase().includes("ai")) {
        reply = "I've worked with OpenAI APIs and am currently learning learning LangChain and Hugging Face to build useful AI-powered tools.";
      } else if (input.toLowerCase().includes("skills")) {
        reply = "I've work with JavaScript, React, Node.js, Python, Docker, AWS, and more. In terms of soft skills, I work great in teams, growing up I was always playing team sports, most years being a team captain. Leadership is also a skill I have proven in the real world, College and multiple work enviroments. I also love to learn and believe in constantly adapting/evoloving. If you are looking for a hard worker thats willing to listen to criticism, and learn, I'm the person for you. At this point I am very keen to learn more and cannot wait to further my skills";
      }
      else if (input.toLowerCase().includes("hi")) {
        reply = "Hi there, thanks for viewing my profile, hope you have a great day"
      }

      else if (input.toLowerCase().includes("website")) {
        reply = "That's a great question! This portfolio was built with React and CSS, and shows off my AI, DevOps, and full stack work."
      }
      else if (input.toLowerCase().includes("interests")) {
        reply = "I love American football, I actually held multiple scholarships (runined by Covid-19 pandemic :/ ). I also love animals, working out, going for runs, exploring new locations, trying unique food and being with friends/family."
      }
      else if (input.toLowerCase().includes("hello")) {
        reply = "Hi there, thanks for viewing my profile, hope you have a great day"
      }
      else if (input.toLowerCase().includes("experience")){
        reply = "I have completed a bachelor of Information technology at RMIT (Melbourne Victoria). I have also been working in various other jobs for the past few years, including bartending, council work, lifeguarding, and even Covid testing!"
      }
      else if (input.toLowerCase().includes("angelique")){
        reply = "Angelique has been Isaac's partner for 5 years now, she is incredibly smart, loyal, adorable and overall amazing. Bad at coding tho.... bummer."
      }


      setResponse(reply);
      setLoading(false);
      setInput('');
    }, 1000); // 1s delay to simulate AI thinking
  };

  return (
    <div className="ai-widget">
      <h3>Talk to My AI Assistant</h3>
      <p className="ai-subtext">Ask something like "What are your skills?", "Tell me about your AI projects.", "hello", "experience".</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>
      <div className="ai-response">{response}</div>
    </div>
  );
}

export default AIWidget;

