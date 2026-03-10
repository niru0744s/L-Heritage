import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDRSa2AboMEPjuJtgr1pZrDwLAldDbR4ufNu25BjVsP_g4sZUN5xedb7bnkah613LtjSCD-dethU1zKJZE9BHePAcM8UlNR1cJoeZnLwwXFNmCzXhbt6s4rygD3qvslMWMYGj40y5va_geqHfYhopL7qJGv5TLzvpMJbfpkH6yeiqjtPVQcTaYwn9uUXnFOBmHuRd2_NMj41QOIpi_ZioQ66kZ5rpFK2a9G5NDJ_bnEgKAzydv2Jyohyvwao1gPYRhgMPanAXRXJAb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZazKmLGff_xw1J3Ygf7f3EbSRH3_2DHP7UdJ1wTK3bEy8kOhoy6I-05-EeRqGjWXyJQ8IAt2iGdwFTOc9H755iyVFFG13-e9cwBaIlcMJXp0z4a-GPhC4a9RrHS2GDNn0enJB6PLj_YzSxq3zVNpW_Bz05eEIh2Cbf58rQg8H-dkuBzr8Z8MefgqSswwIzpwuJ4t-9q_4GQ6sRDemBcKrHKwi5-Q9rmbwYIHuVkPqk0CXYUBaUD9hGn6g84_OHchDL46-3U9F6D4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2jkvsuKPZRDCWo3h0zFmaWvQo04EmvA-NV3wEzlYBZDCS2AdYepKrrcK4trr92sH7N_rv9RVHnTQmR6k5GVdE36nzbNpYtrLlwWAvOr6VzI_HeqsQ5ucBGJShgD8VLUR9FpJ2bbAOdFv3ajw7df9fRItfo6mdkedEIRORHP9wd_d50FFZ-G07-f2x0mKXapzkfUN3UOTpe7SJUR52mpvPTA0Hh5CTLCQMLpmJ8JwZyqPDnDZEO_CwN2enej7WoYNL1E30MzU4zwPd",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArYNMufylsKzLsyObbY9BrNa5rUZNpXvQyvoHMDkkFEnwqPnSXN-agT_q4r7VqjHZy0Bog0TWIkYfbGvMrjQv2VIeZ9ocKWKltiX1uGVX5Evq06QXGmrhRQZF_ZdRWGW2Mpoh28rhoRSrJGVJmfKf2j6OuF9bKN3OAOvMiIJtEkh6l0cIzacLXI7N7IxIjeTyJd0TzHQCNIydftT9US6L-xL7dLoqXQMpxryk1DrBzOk7iYVT_UbbsCy4ZJt7UDebBMvE1k6mow1Pm",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCY5TntwkJl2qCBAtb2lSBMjayZKBsbp49NYCG_I_Dvz0jr8sfrF19K1XprulECxeJLqXp5EcyaZHRY5X_LIXNlXgKMIp7skb6HCGIcmzOuA59i8VCiwYQ3RRLmghUgGU9aL1mSgbQLDjTCXJ-ayAMI3uqLoqsLBnEMWDLu9_XzcCPeFZXfEr4p7E_1mp5WLBvNHTDP6UjuJJAhpSfbkjT1gyGc3Bq_YnauN6mIXc_dNu55QAXdNlXikLPAjdnFe2T3ux0U8jbXJxwF"
    ];

    return (
        <section className={styles.gallery} id="gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The Ambience</h2>
                    <p className={styles.subtitle}>Visual Whispers of Luxury</p>
                </div>
                <div className={styles.grid}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={src} alt="Restaurant ambience" className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
