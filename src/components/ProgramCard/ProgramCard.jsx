import React from 'react';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ title, description, icon, features }) => {
  return (
    <div className={styles.programCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{description}</p>
        {features && (
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.cardFooter}>
        <button className="btn btn-secondary">Pelajari Lebih Lanjut</button>
      </div>
    </div>
  );
};

export default ProgramCard;