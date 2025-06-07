'use client';

import { motion } from 'framer-motion';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Resume</h2>
          <p className={styles.description}>
            Download my resume to learn more about my experience and skills.
          </p>
          <motion.a
            href="/Resume.pdf"
            download="Ryo_Kusnadi_Resume.pdf"
            className={styles.downloadButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 