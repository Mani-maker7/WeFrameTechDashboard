import Card from '@/components/dashboard/Card';
import styles from '@/styles/ProspectLeads.module.css';

export default function ProspectLeads() {
  const prospects = [
    {
      name: 'Wade Warren',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stage: 'Initial Inquiry'
    },
    {
      name: 'Ava Wright',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stage: 'Initial Inquiry'
    },
    {
      name: 'Cody Fisher',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stage: 'Initial Inquiry'
    }
  ];
  
  return (
    <Card className={styles.card} title="Prospect Leads">
      <div className={styles.prospectList}>
        {prospects.map((prospect, index) => (
          <div key={index} className={styles.prospectItem}>
            <div className={styles.prospectInfo}>
              <div className={styles.prospectAvatar}>
                <img src={prospect.image} alt={prospect.name} />
              </div>
              <div className={styles.prospectName}>{prospect.name}</div>
            </div>
            <div className={styles.prospectStage}>Stage: {prospect.stage}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}