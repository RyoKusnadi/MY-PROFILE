'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './CaseStudies.module.css';

const studies = [
  {
    title: 'Zero-downtime migration to distributed DB',
    role: 'PIC — Seller Income · 2025',
    impact: '0 downtime, data integrity maintained',
    summary:
      'Led migration from legacy financial databases to a distributed architecture with phased cutovers, shadow traffic, and contract-based validation.',
    bullets: [
      'Phased replication with CDC; dual-write guards; automatic drift detection',
      'Failover playbooks and SLO-based readiness checks before final switch',
      'Improved throughput and consistency for high-volume seller transactions',
    ],
  },
  {
    title: 'Real-time monitoring via CDC + contracts',
    role: 'Seller Income · 2025',
    impact: '↓30% downtime, faster anomaly detection',
    summary:
      'Built anomaly detection using CDC streams and schema contracts to validate events and prevent silent data issues.',
    bullets: [
      'Contract tests on payload shape, currency/amount bounds, and idempotency',
      'Alerting on divergence between source-of-truth and downstream consumers',
      'Runbooks with auto-mitigation hooks for common failure modes',
    ],
  },
  {
    title: 'Escrow lifecycle re-architecture',
    role: 'Seller Income · 2025',
    impact: '↓15% payout discrepancies',
    summary:
      'Redesigned escrow pipeline with layered validation and resilience patterns to protect payouts.',
    bullets: [
      'Idempotent orchestration; retries with backoff and poison-queue isolation',
      'Boundary checks on amounts, FX, and duplicate events across services',
      'Recovery playbooks for partial failures and out-of-order messages',
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, type: 'spring' as const, stiffness: 80 },
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Case Studies</h2>
          <p className={styles.subtitle}>
            Reliability, migrations, and automation with measurable outcomes.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {studies.map((study) => (
            <motion.article key={study.title} variants={item} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <h3 className={styles.cardTitle}>{study.title}</h3>
                  <div className={styles.role}>{study.role}</div>
                </div>
                <span className={styles.impact}>{study.impact}</span>
              </div>
              <p className={styles.summary}>{study.summary}</p>
              <ul className={styles.list}>
                {study.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


