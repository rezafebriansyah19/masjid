import React from 'react';
import styles from './StatsBox.module.css';

const StatsBox = ({ number, label, icon }) => {
  return (
    <div className={styles.statsBox}>
      <div className={styles.statsIcon}>{icon}</div>
      <div className={styles.statsContent}>
        <div className={styles.statsNumber}>{number}</div>
        <div className={styles.statsLabel}>{label}</div>
      </div>
    </div>
  );
};

export default StatsBox;