"use client"
import { AudioLines, MessageSquareMore } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter()
  const handleclick = (path:any) =>{
    router.push(path)
    
  }
  return (
    <div className={styles.page}>
    <button className={styles.talk} onClick={()=>{handleclick("./voiceAssistant")}}>Speak to Ai Assistant   <AudioLines color="red" /> </button>
    <button className={styles.chat} onClick={()=>{handleclick("./chatAssistant")}}>Chat to Ai Assistant <MessageSquareMore color='red'/></button>
    </div>
  );
}
