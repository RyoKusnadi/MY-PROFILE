'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Hero() {
  const title = "Hi, I'm Ryo Kusnadi";
  const subtitle = "Backend & distributed systems engineer";

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.title}>
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            className={styles.subtitle}
            variants={fadeInUp}
          >
            {subtitle}
          </motion.h2>

          <motion.p 
            className={styles.description}
            variants={fadeInUp}
          >
            I specialize in high-scale services, data correctness, and resilient payouts with measurable impact.
          </motion.p>

          <motion.div 
            className={styles.cta}
            variants={fadeInUp}
          >
            <motion.a
              href="#my-works"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#case-studies"
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.a>
          </motion.div>

          <motion.div 
            className={styles.scrollIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span>Scroll Down</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img src="/main.png" alt="Profile" className={styles.image} />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 