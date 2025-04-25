import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className={styles.layout}>
      <Sidebar open={sidebarOpen} />
      <div className={styles.mainContainer}>
        <Header toggleSidebar={toggleSidebar} />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}