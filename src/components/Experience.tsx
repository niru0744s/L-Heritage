import React from 'react';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The Experience</h2>
                    <div className={styles.divider} />
                </div>
                <div className={styles.grid}>
                    {/* Gourmet Cuisine */}
                    <div className={styles.card}>
                        <span className={`material-symbols-outlined ${styles.icon}`}>skillet</span>
                        <h3 className={styles.cardTitle}>Gourmet Cuisine</h3>
                        <p className={styles.cardText}>
                            Exquisite seasonal flavors crafted by our executive chefs, focusing on the purity of ingredients and avant-garde plating.
                        </p>
                    </div>
                    {/* Curated Wine */}
                    <div className={`${styles.card} ${styles.cardFeatured}`}>
                        <span className={`material-symbols-outlined ${styles.icon}`}>wine_bar</span>
                        <h3 className={styles.cardTitle}>Wine Collection</h3>
                        <p className={styles.cardText}>
                            Our subterranean cellar houses over 12,000 rare labels, featuring vintages dating back to the early 20th century.
                        </p>
                    </div>
                    {/* Live Music */}
                    <div className={styles.card}>
                        <span className={`material-symbols-outlined ${styles.icon}`}>piano</span>
                        <h3 className={styles.cardTitle}>Classical Music</h3>
                        <p className={styles.cardText}>
                            Nightly live performances by world-class soloists, creating an atmosphere of sophisticated melodic elegance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
