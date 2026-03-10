import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.section}>
                        <div className={styles.brand}>
                            <span className={`material-symbols-outlined ${styles.icon}`}>restaurant</span>
                            <h2 className={styles.title}>L'Héritage</h2>
                        </div>
                        <p className={styles.quote}>
                            "Excellence is not an act, but a habit." Since 1924.
                        </p>
                    </div>

                    {/* Location */}
                    <div className={styles.section}>
                        <h4 className={styles.heading}>Location</h4>
                        <p className={styles.text}>
                            14 Place de la Concorde<br />
                            Paris, France 75008
                        </p>
                    </div>

                    {/* Hours */}
                    <div className={styles.section}>
                        <h4 className={styles.heading}>Hours</h4>
                        <p className={styles.text}>Tues - Sat: 18:00 — 23:30</p>
                        <p className={styles.text}>Sun: 12:00 — 16:00 (Brunch)</p>
                        <p className={styles.text}>Mon: Closed</p>
                    </div>

                    {/* Social */}
                    <div className={styles.section}>
                        <h4 className={styles.heading}>Connect</h4>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink}>
                                <span className="material-symbols-outlined">share</span>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <span className="material-symbols-outlined">camera_alt</span>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <span className="material-symbols-outlined">star</span>
                            </a>
                        </div>
                        <div className={styles.contact}>
                            <p className={styles.text}>+91 7439893394</p>
                            <p className={styles.text}>
                                <a href="mailto:niruk792@gmail.com" className={styles.emailLink}>
                                    niruk792@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2024 L'Héritage Group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
