import styles from '@/styles/Dashboard.module.css';
import AccountProgress from '@/components/dashboard/AccountProgress';
import FranchiseesOnboard from '@/components/dashboard/FranchiseesOnboard';
import KeyInsights from '@/components/dashboard/KeyInsights';
import FinancialWellbeing from '@/components/dashboard/FinancialWellbeing';
import ProspectLeads from '@/components/dashboard/ProspectLeads';
import PendingQuestions from '@/components/dashboard/PendingQuestions';
import ChatAssistant from '@/components/dashboard/ChatAssistant';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topSection}>
        <AccountProgress />
        <div className={styles.middleGroup}>
          <div className={styles.leftColumn}>
            <FranchiseesOnboard />
            <FinancialWellbeing />
          </div>
          <div className={styles.rightColumn}>
            <KeyInsights />
            <ProspectLeads />
          </div>
        </div>
      </div>
      
      <div className={styles.bottomRow}>
        <PendingQuestions />
        <ChatAssistant />
      </div>
    </div>
  );
}