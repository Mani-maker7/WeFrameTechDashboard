import Card from '@/components/dashboard/Card';
import styles from '@/styles/FranchiseesOnboard.module.css';

export default function FranchiseesOnboard() {
  const franchiseeCount = 14;
  const growthPercentage = 7.4;

  const stages = [
    { name: 'Stage 1 (Initial Inquiry)', count: 2, color: '#1e5486' },
    { name: 'Stage 2 (Document Submission)', count: 7, color: '#4e9ef7' },
    { name: 'Stage 3 (Training)', count: 5, color: '#b3e5fc' }
  ];

  return (
    <Card className={styles.card} title="Total Franchisees Onboard">
    <div className={styles.header}>
      <div className={styles.countContainer}>
        <div className={styles.countAndGrowth}>
          <div className={styles.count}>{franchiseeCount}</div>
          <div className={styles.growth}>
            <span className={styles.growthBadge}>↑ {growthPercentage}%</span>
          </div>
        </div>
        <div className={styles.avatarGroup}>
          <div className={styles.avatars}>
            <img
              src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Franchisee"
            />
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Franchisee"
            />
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Franchisee"
            />
            <img
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Franchisee"
            />
            <img
              src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Franchisee"
            />
          </div>
          <span className={styles.moreCount}>+7</span>
        </div>
      </div>
    </div>
  
    <div className={styles.progressSection}>
      {stages.map((stage, index) => (
        <div key={index} className={styles.stageItem}>
          <div className={styles.stageInfo}>
            <span className={styles.stageDot} style={{ backgroundColor: stage.color }}></span>
            <span className={styles.stageName}>{stage.name}</span>
            <span className={styles.stageCount}>{stage.count.toString().padStart(2, '0')}</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(stage.count / franchiseeCount) * 100}%`,
                  backgroundColor: stage.color
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
  
  );
}
