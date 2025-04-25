import { useState } from 'react';
import styles from '@/styles/ChatAssistant.module.css';

export default function ChatAssistant() {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
  };
  
  return (
    <div className={styles.chatContainer}>
  <div className={styles.chatBody}>
  <div className={styles.imageContainer}>
          <img 
            src="https://media.licdn.com/dms/image/v2/C4E0BAQGSkKvzZ8M9Dw/company-logo_200_200/company-logo_200_200/0/1630609994812/montrose_software_logo?e=2147483647&v=beta&t=Yom1etctjCQT-1nI78MAUEOQ62U625C6St1sGNgrTkA" 
            alt="Chat Assistant" 
            className={styles.image} 
          />
        </div>
        
    <div className={styles.welcomeMessage}>
      <h2>Welcome to the AI Chat Assistant</h2>
    </div>

    <form className={styles.chatInput} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask your question here.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.inputField}
      />
      <button type="submit" className={styles.sendButton}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  </div>
</div>
  );
}