import React from 'react';
import styles from './Reservation.module.css';

export default function Reservation() {
    return (
        <section className={styles.reservation} id="reservation">
            <div
                className={styles.background}
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAQQ8VgKEATNuyRAN_zyxx7Y5xV7sSHEA2d6p9stDpfzLuVLVWI-jSiMPIOALBD46HXGggKuKY_1kQ5H9F6J09J2E36CUIjz1otUM41Yv-qMqkjT3fjaCk9Wx6AOwHfK6gHMLqprpYQUgBQTzehjj1vk1uNJ3kA5-uRrDOzs-Pv7sAy_dwR9EeaWJsZRY65TzLfRzd-5ExB4LgNT__foRyAIT9c52QanKVfPTeK0P4KfM-DjM44eTlnMY8LTWnbkIO6reFFbg0VGWk')"
                }}
            />
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Secure a Table</h2>
                        <p className={styles.subtitle}>Join us for an unforgettable evening of culinary excellence.</p>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Date</label>
                                <input type="date" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Time</label>
                                <select className={styles.input}>
                                    <option>18:00</option>
                                    <option>19:30</option>
                                    <option>21:00</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Guests</label>
                            <select className={styles.input}>
                                <option>2 Persons</option>
                                <option>4 Persons</option>
                                <option>6 Persons</option>
                                <option>Private Room (8+)</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Complete Reservation
                        </button>
                        <p className={styles.footerNote}>
                            Dress code: Black Tie / Formal Attire Preferred
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
