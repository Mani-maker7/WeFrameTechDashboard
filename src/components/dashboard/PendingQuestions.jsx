import Card from '@/components/dashboard/Card';
import styles from '@/styles/PendingQuestions.module.css';

export default function PendingQuestions() {
  const questions = [
    {
      user: 'Phoenix Baker',
      username: '@phoenix',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      question: 'What are the requirements for opening a new store?',
      time: '5min ago',
      status: 'online'
    },
    {
      user: 'Koray Okumus',
      username: '@koray',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      question: 'How do I manage inventory effectively?',
      time: '4hr ago',
      status: 'online'
    }
  ];
  
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Pending Questions</h2>
        <div className={styles.badge}>02</div>
      </div>
      
      <div className={styles.questionsList}>
        {questions.map((item, index) => (
          <div key={index} className={styles.questionItem}>
            <div className={styles.indicator}></div>
            <div className={styles.avatar}>
              <img src={item.avatar} alt={item.user} />
              <span className={`${styles.status} ${styles[item.status]}`}></span>
            </div>
            <div className={styles.content}>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{item.user}</div>
                <div className={styles.userHandle}>{item.username}</div>
              </div>
              <p className={styles.questionText}>{item.question}</p>
            </div>
            <div className={styles.timestamp}>{item.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}