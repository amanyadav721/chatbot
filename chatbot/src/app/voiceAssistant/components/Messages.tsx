// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import styles from "./main.module.scss"
export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();
  if (readyState === VoiceReadyState.OPEN) {
    return (
      <div className={styles.controls}>
        <button
          className={`${styles.endSession} ${styles["end-session"]}`}
          onClick={() => {
            disconnect();
          }}
        >
          End Session
        </button>
      </div>
    );
  }

  return (
    <div className={styles.controls}>
      <button
        className={`${styles.startSession} ${styles["start-session"]}`}
        onClick={() => {
          connect()
            .then(() => {
              /* handle success */
            })
            .catch(() => {
              /* handle error */
            });
        }}
      >
        Start Session
      </button>
    </div>
  );
}