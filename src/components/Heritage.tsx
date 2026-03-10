import React from 'react';
import styles from './Heritage.module.css';

export default function Heritage() {
    return (
        <section className={styles.heritage} id="heritage">
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        alt="Vintage restaurant interior with gold accents and antique furniture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfVkaHr4yEcsK3mFx5-HGuL3cekcqYVxXSXCO1reIywq_E3Mu5NYCo2fpAUt3K_LwNpZ7L0yUxUeu9dhcX9tHbGvrOrfNIvnaZ1anRvSj_Od7wdn5twEQak7djf6sRVNYjEphe25MkMxlS7GC6JM5C9BTMqACPWKIP3Y0zrfC2NnSCr-BPb661Ok9887d3a-w8S7qdIbb6EIhX8nbN6wuGYd-i4H2ZJ1j1odWpaK1gU72UL1mjO3-2WGRH0pVs8rpmDbtb8p0qqA2d"
                    />
                    <div className={styles.imageGradient} />
                </div>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span>Est. 1924</span>
                    </div>
                    <h2 className={styles.title}>Preserving the Art of Gastronomy</h2>
                    <div className={styles.description}>
                        <p>Founded nearly a century ago, L'Héritage was born from a passion for the grand traditions of European service. We believe that fine dining is more than just a meal; it is a meticulously choreographed performance.</p>
                        <p>Our kitchen honors the classic techniques of the masters while embracing the season's finest harvests. Every candle lit and every glass polished is a tribute to our enduring legacy.</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statBox}>
                            <p className={styles.statValue}>3</p>
                            <p className={styles.statLabel}>Michelin Stars</p>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.statBox}>
                            <p className={styles.statValue}>98</p>
                            <p className={styles.statLabel}>Year History</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
