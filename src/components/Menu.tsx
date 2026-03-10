import React from 'react';
import styles from './Menu.module.css';

export default function Menu() {
    const menuItems = [
        {
            title: 'Wagyu Rossini',
            price: '$85',
            desc: 'Grade A5 Wagyu, Foie Gras, Perigord Truffle, Madeira Jus',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNU8ebbKIIyAciU-0jr46n1EOxR7hqF-9rIhZwMvpmV1cBJ0-ROKBkHrBUeu_JHv4att_ZlW3hqWlIP75zDVxI1BZsGvx9B83e32DRMNUHBYx_0ead_uS3s-zjzwEbu-zl71hau-FulI-U5pu_UKJrnvXFzfQGuIu1eQS2Q0OobJidUhTriENSJdnGnTkVLDYEbLuxCyD5LFOPXA7nSXxZ8wbisjtDuKBvVJIRg-0sRj9JKS86FEFv8qD5GHUp4wjzKQ51JRjQxBqC"
        },
        {
            title: 'Salmon Confit',
            price: '$62',
            desc: 'Atlantic Salmon, Wild Sorrel, Lemon Caviar, Champagne Sauce',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-H63_56RamZZiTvEdstSV5nG2UYW9BdYRlo51KOfYdzV10LCsiEMVzG3vP24g2LZlC1-ZWLHu0vt2b4z0QBjJ4YEtJRltefb3R9MNWoKaW1vyZQDOGyEnLp288Jh-Iaiq1747OPnLh1WSrWof76CsiepbdcO-ckN0XuYyxF0I6rhfs7qOsvPv7X3oUbGeDMW9q5pCgixjiVYaCR4oRDjVh1RQ37uuQ7b9NnDhhA0dmfQMzSCWGsRx8RvEh1mUvyZqjwFVBOQV2Vh"
        },
        {
            title: 'Lobster Ravioli',
            price: '$74',
            desc: 'Blue Lobster, Saffron Emulsion, Chive Oil, Aged Parmesan',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUheCWAfCJAT0EaM2S_dKT2DjBkse3MnM1leNHoE4o5qjd7hhXXp9RD3MGjqsh0o43-3iXpe9eLjVmynrvcLGzFiowt6kLtg_14TdL4ec-jHsbQPUOiYirQ-UhWstFalbh-7BqmI9SPSJjr-h1Gx5o3GvdZdUpzYmatY64w-SQ1_uNAE7ULPU0xCvDIfuqSPf67VMKZf1fEf5uOykMkzA5Xa5M9bxyYirJZ-vBIZx3kEJPGtR_W4voU4ZjKto01wSy_MBscvINKw96"
        }
    ];

    return (
        <section className={styles.menu} id="menu">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Le Menu</h2>
                        <p className={styles.subtitle}>Curated Seasonal Selections</p>
                    </div>
                    <div className={styles.filters}>
                        <button className={`${styles.filterBtn} ${styles.filterActive}`}>Mains</button>
                        <button className={styles.filterBtn}>Appetizers</button>
                        <button className={styles.filterBtn}>Desserts</button>
                        <button className={styles.filterBtn}>Wine</button>
                    </div>
                </div>
                <div className={styles.grid}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.menuCard}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <span className={styles.cardPrice}>{item.price}</span>
                                </div>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
