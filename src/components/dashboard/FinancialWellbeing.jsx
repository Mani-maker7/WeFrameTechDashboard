import Card from '@/components/dashboard/Card';
import styles from '@/styles/FinancialWellbeing.module.css';

export default function FinancialWellbeing() {
  const franchiseeCount = 20;
  const growthPercentage = 2.1;
  const target = 500000;
  const current = 450000;
  
  return (
    <Card className={styles.card} title="Financial Wellbeing">
      <div className={styles.header}>
        <div className={styles.count}>{franchiseeCount}</div>
        <div className={styles.growth}>
          <span className={styles.growthBadge}>↑ {growthPercentage}%</span>
        </div>
      </div>
      <div className={styles.subtitle}>Total Franchisees</div>
      
      <div className={styles.financialData}>
        <div className={styles.dataColumn}>
          <div className={styles.dataLabel}>Target</div>
          <div className={styles.dataValue}>${target.toLocaleString()}</div>
        </div>
        <div className={styles.dataColumn}>
          <div className={styles.dataLabel}>Current</div>
          <div className={styles.dataValue}>${current.toLocaleString()}</div>
        </div>
      </div>
    </Card>
  );
}