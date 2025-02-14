"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./chat.module.scss";
import { CircleChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Chat() {
  const router = useRouter()
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: { role: "user"; content: string } = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);



    setLoading(true);

  
    try {
        const response = await axios.post(
          "https://prana-test.onrender.com/ai",
          {
            "email":"ad721603@gmail.com",
            "ques":"Hey "
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        // Update to handle the "response" key correctly
        const aiMessage: { role: "ai"; content: string } = { 
          role: "ai", 
          content: response.data.response.output || "No response from AI.",
        };
        
        setMessages((prev) => [...prev, aiMessage]);
        
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: "Error communicating with the server." },
        ]);
      } finally {
        setInput("");
        setLoading(false);
      }
    };

   

  return (
    <div>
      <button className={styles.backbtn} onClick={()=>{router.push("./")}}> <CircleChevronLeft color="red" />Home</button>
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.role === "user" ? styles.user : styles.ai
            }`}
          >
            <div className={styles.messageContent}>{msg.content}</div>
          </div>
        ))}
        {loading && <div className={styles.loading}>AI is typing...</div>}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className={styles.sendButton}
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
}
