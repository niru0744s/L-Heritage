import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>restaurant</span>
                    <h2>L'Héritage</h2>
                </div>
                <nav className={styles.nav}>
                    <a href="#heritage">Heritage</a>
                    <a href="#experience">Experience</a>
                    <a href="#menu">Menu</a>
                    <a href="#gallery">Gallery</a>
                    <button className={styles.bookBtn}>Book Now</button>
                </nav>
                <button className={styles.mobileMenu}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
