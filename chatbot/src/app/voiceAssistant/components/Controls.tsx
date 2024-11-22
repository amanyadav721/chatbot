// ./components/Messages.tsx
"use client";
import { useVoice } from "@humeai/voice-react";
import styles from "./main.module.scss"

export default function Messages() {
  const { messages } = useVoice();

  return (
    <div className={`${styles.container} ${styles.messages}`}>
      {messages.map((msg, index) => {
        if (msg.type === "user_message" || msg.type === "assistant_message") {
          return (
            <div 
            key={msg.type + index}
            className={`${styles.message} ${styles[msg.type]}`}
            >
              <div className={styles.role}>{msg.message.role}</div>
              <div className={styles.content} >{msg.message.content}</div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
