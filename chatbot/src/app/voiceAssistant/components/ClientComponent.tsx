/* eslint-disable */
"use client";
import { VoiceProvider, ToolCallHandler } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import axios from "axios";

const handleToolCall: ToolCallHandler = async (message, send) => {
  if (message.name === "ask_health_question") {
    try {
      // Call your API with the input from the tool message
      const response = await axios.post(
        "https://chatbot-backend-xyjc.onrender.com/ask",
        // @ts-ignore
        { question: input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Process the API response
      const aiResponse = response.data.response || "No response from AI.";

      // Send success message back to the tool
      return send.success({ message: aiResponse });
    } catch (error) {
      console.error("Error calling AI API:", error);

      // Send error message back to the tool
      return send.error({
        error: "API Error",
        code: "api_call_failed",
        level: "error",
        content: "Failed to communicate with the AI API.",
      });
    }
  }

  // Fallback if the tool is not recognized
  return send.error({
    error: "Tool Not Found",
    code: "tool_not_found",
    level: "warn",
    content: "The tool you requested is not available.",
  });
};

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      onToolCall={handleToolCall} 
      configId={process.env.HUME_CONFIG_ID}
    >
      <Messages />
      <Controls />
    </VoiceProvider>
  );
}
