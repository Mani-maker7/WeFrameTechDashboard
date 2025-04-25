import Card from '@/components/dashboard/Card';
import styles from '@/styles/KeyInsights.module.css';

export default function KeyInsights() {
  return (
    <Card  className={styles.card} title="Key Insights & Feedback">
      <div className={styles.growthSection}>
        <div className={styles.growthMetric}>
          <div className={styles.metricValue}>10%</div>
          <div className={styles.metricLabel}>Sales Growth</div>
        </div>
        <div className={styles.performerBadge}>
          <div className={styles.badgeIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L8.5 10L15.5 10L12 15Z" fill="#4e9ef7"/>
              <circle cx="12" cy="12" r="9" stroke="#4e9ef7" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <span className={styles.badgeText}>Top Performer</span>
        </div>
      </div>
      
      <div className={styles.feedbackSection}>
        <h3 className={styles.feedbackTitle}>Feedback</h3>
        
        <div className={styles.feedbackItem}>
          <div className={styles.feedbackIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9e9e9e" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className={styles.feedbackText}>
            Franchisees are requesting more detailed training materials.
          </div>
        </div>
      </div>
    </Card>
  );
}