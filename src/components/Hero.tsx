import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div
                className={styles.background}
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdyj2VwCGj2HEESAo4VHFh85E2W-k977ZGVMfObcQ5brC9h-gEEYAjtUWx4JDolVbkdD7vqzyVb9htTX6tDfqWuleITGUa2w7l48_e9G1LuA80tXdbAqzWbpTvyOvq0IivcSUqqy5bv97nlvosFNMm1m1fCJZNcb83fnUfMmZ8iyJAO5Vgqte2q7EPf9Hb3bXiLKn-JoNrnI_T8--QJJvEkuUif8RDRevZDUrD2JraJwWZO1X6atcH12VjVPMh3DoE4Rvv4e1TkiQP')"
                }}
            />
            <div className={styles.content}>
                <span className={`material-symbols-outlined ${styles.icon}`}>workspace_premium</span>
                <h1 className={styles.title}>L'Héritage</h1>
                <p className={styles.subtitle}>A Legacy of European Fine Dining</p>
                <div className={styles.actions}>
                    <button className={styles.reserveBtn}>Reserve a Table</button>
                    <button className={styles.exploreBtn}>Explore Menu</button>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </section>
    );
}
