import Card from '@/components/dashboard/Card';
import styles from '@/styles/AccountProgress.module.css';
import { useEffect, useState } from 'react';

export default function AccountProgress() {
  const [animated, setAnimated] = useState(false);
  const progress = 85;
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimated(true);
  }, []);
  
  return (
    <Card  className={styles.card} title="Account Progress">
      <div className={styles.progressContainer}>
        <div className={styles.circleProgress}>
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle
              className={styles.circleBackground}
              cx="75"
              cy="75"
              r="60"
              strokeWidth="15"
            />
            <circle
              className={`${styles.circleValue} ${animated ? styles.animate : ''}`}
              cx="75"
              cy="75"
              r="60"
              strokeWidth="15"
              strokeDasharray="377"
              strokeDashoffset={377 - (377 * progress) / 100}
            />
          </svg>
          <div className={styles.progressValue}>{progress}%</div>
        </div>
      </div>
      
      <div className={styles.stepsSection}>
        <h3 className={styles.stepsTitle}>Steps Completed</h3>
        <ul className={styles.stepsList}>
          <li className={styles.stepItem}>
            <span className={`${styles.stepDot} ${styles.completed}`}></span>
            <span className={styles.stepText}>Profile Setup</span>
            <span className={styles.stepCheck}>✓</span>
          </li>
          <li className={styles.stepItem}>
            <span className={`${styles.stepDot} ${styles.completed}`}></span>
            <span className={styles.stepText}>Initial Training</span>
            <span className={styles.stepCheck}>✓</span>
          </li>
          <li className={styles.stepItem}>
            <span className={`${styles.stepDot} ${styles.completed}`}></span>
            <span className={styles.stepText}>Legal Documents</span>
            <span className={styles.stepCheck}>✓</span>
          </li>
        </ul>
        <div className={styles.divider}></div>

        <h3 className={`${styles.stepsTitle} ${styles.remainingTitle}`}>Steps Remaining</h3>
        <ul className={styles.stepsList}>
          <li className={styles.stepItem}>
            <span className={`${styles.stepDot} ${styles.pending}`}></span>
            <span className={styles.stepText}>Financial Integration</span>
            <span className={styles.stepPending}>⋯</span>
          </li>
          <li className={styles.stepItem}>
            <span className={`${styles.stepDot} ${styles.pending}`}></span>
            <span className={styles.stepText}>Final Review</span>
            <span className={styles.stepPending}>⋯</span>
          </li>
        </ul>
      </div>
    </Card>
  );
}