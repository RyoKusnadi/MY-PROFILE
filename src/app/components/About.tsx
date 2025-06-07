'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';
import { useState } from 'react';

export default function About() {
  // Expand/collapse state for each job
  const [openShopeeSenior, setOpenShopeeSenior] = useState(false);
  const [openShopeeEngineer, setOpenShopeeEngineer] = useState(false);
  const [openShopeeJunior, setOpenShopeeJunior] = useState(false);
  const [openSatNusa, setOpenSatNusa] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <h2 className={styles.title}>About Me</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.imageWrapper}
            style={{ margin: '0 auto 3rem', maxWidth: '300px' }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/me.jpg"
                alt="Ryo Kusnadi"
                fill
                className={styles.image}
                priority
              />
            </div>
          </motion.div>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '600px', 
            margin: '0 auto 3rem',
            padding: '1.5rem',
            background: '#f8fafc',
            borderRadius: 12,
            boxShadow: '0 2px 8px #0001'
          }}>
            <p style={{ 
              fontSize: '1.1em', 
              lineHeight: 1.6, 
              color: '#374151',
              margin: 0
            }}>
              I'm a backend-focused engineer at Shopee, passionate about building robust, scalable systems that make a real impact.
            </p>
          </div>
          <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Work Experience Section */}
            <div className={styles.text}>
              <h3 style={{marginTop: '0', marginBottom: '1.2rem', fontSize: '1.3em', fontWeight: 700, letterSpacing: 1, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: '1.2em', color: '#222'}}>Work Experience</span>
                <span style={{fontSize: '1.1em', color: '#aaa', fontWeight: 400}}>(Job)</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <img src="/shopee-logo.png" alt="Shopee Logo" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6, boxShadow: '0 2px 8px #6366f122', mixBlendMode: 'multiply', background: '#fff', padding: 4 }} />
                <span style={{ fontWeight: 700, fontSize: '1.2em', color: '#2563eb', letterSpacing: 1 }}>Shopee</span>
              </div>
              <ul style={{ marginLeft: 0, marginBottom: 12, listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 12 }}>
                  <button
                    onClick={() => setOpenShopeeSenior(v => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: openShopeeSenior ? 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)' : '#f1f5f9',
                      color: openShopeeSenior ? '#fff' : '#222',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 1.2rem',
                      fontWeight: 600,
                      fontSize: '1em',
                      boxShadow: openShopeeSenior ? '0 4px 16px #6366f133' : '0 2px 8px #0001',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginBottom: 4
                    }}
                    aria-expanded={openShopeeSenior}
                  >
                    <span style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize:'1.1em'}}>Senior Software Engineer (Seller Income)</span>
                      <span style={{fontWeight:400, fontSize:'0.95em', opacity:0.8, marginLeft:8}}>Jan 2025 – Present</span>
                    </span>
                    <span style={{fontSize:'1.3em'}}>{openShopeeSenior ? '▼' : '▶'}</span>
                  </button>
                  {openShopeeSenior && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ margin: '0.5rem 0 0 1.5rem', color: '#374151', fontSize: '1em', background: '#f8fafc', borderRadius: 8, padding: '1rem', boxShadow: '0 2px 8px #0001' }}
                    >
                      <li>Led the seamless transition from legacy databases to a distributed architecture, achieving zero downtime and improved system performance.</li>
                      <li>Designed and implemented a real-time monitoring system utilizing Change Data Capture (CDC) and contract-based validation, reducing system downtime by 30% and enabling early anomaly detection.</li>
                      <li>Reengineered the escrow process with multiple validation layers, including idempotency checks and boundary condition testing, reducing payout discrepancies by 15%.</li>
                    </motion.ul>
                  )}
                </li>
                <li style={{ marginBottom: 12 }}>
                  <button
                    onClick={() => setOpenShopeeEngineer(v => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: openShopeeEngineer ? 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)' : '#f1f5f9',
                      color: openShopeeEngineer ? '#fff' : '#222',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 1.2rem',
                      fontWeight: 600,
                      fontSize: '1em',
                      boxShadow: openShopeeEngineer ? '0 4px 16px #6366f133' : '0 2px 8px #0001',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginBottom: 4
                    }}
                    aria-expanded={openShopeeEngineer}
                  >
                    <span style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize:'1.1em'}}>Software Engineer (Invoice)</span>
                      <span style={{fontWeight:400, fontSize:'0.95em', opacity:0.8, marginLeft:8}}>Mar 2023 – Dec 2024</span>
                    </span>
                    <span style={{fontSize:'1.3em'}}>{openShopeeEngineer ? '▼' : '▶'}</span>
                  </button>
                  {openShopeeEngineer && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ margin: '0.5rem 0 0 1.5rem', color: '#374151', fontSize: '1em', background: '#f8fafc', borderRadius: 8, padding: '1rem', boxShadow: '0 2px 8px #0001' }}
                    >
                      <li>Streamlined buyer invoice generation across multiple services, reducing mismatches by 25%.</li>
                      <li>Automated the invoice issuance process for Brazil, cutting manual processing time from 5 days to real-time and reducing finance team effort by 90%.</li>
                      <li>Refactored and optimized legacy code for Shopee Taiwan's receipt issuance flow, resolving recurring system issues and enhancing integration with third-party invoice issuers.</li>
                    </motion.ul>
                  )}
                </li>
                <li style={{ marginBottom: 12 }}>
                  <button
                    onClick={() => setOpenShopeeJunior(v => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: openShopeeJunior ? 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)' : '#f1f5f9',
                      color: openShopeeJunior ? '#fff' : '#222',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 1.2rem',
                      fontWeight: 600,
                      fontSize: '1em',
                      boxShadow: openShopeeJunior ? '0 4px 16px #6366f133' : '0 2px 8px #0001',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginBottom: 4
                    }}
                    aria-expanded={openShopeeJunior}
                  >
                    <span style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize:'1.1em'}}>Junior Engineer</span>
                      <span style={{fontWeight:400, fontSize:'0.95em', opacity:0.8, marginLeft:8}}>Sep 2022 – Mar 2023</span>
                    </span>
                    <span style={{fontSize:'1.3em'}}>{openShopeeJunior ? '▼' : '▶'}</span>
                  </button>
                  {openShopeeJunior && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ margin: '0.5rem 0 0 1.5rem', color: '#374151', fontSize: '1em', background: '#f8fafc', borderRadius: 8, padding: '1rem', boxShadow: '0 2px 8px #0001' }}
                    >
                      <li>Led a team project under strict deadlines, fostering collaboration and delivering all tasks on time without major issues.</li>
                      <li>Mentored peers by simplifying complex technical concepts, improving team performance and knowledge retention.</li>
                    </motion.ul>
                  )}
                </li>
              </ul>

              {/* Sat Nusapersada Group */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, marginTop: 24 }}>
                <img src="/satnusa-logo.png" alt="Sat Nusapersada Logo" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6, boxShadow: '0 2px 8px #16a34a22', background: '#fff', padding: 4 }} />
                <span style={{ fontWeight: 700, fontSize: '1.2em', color: '#16a34a', letterSpacing: 1 }}>Sat Nusapersada</span>
              </div>
              <ul style={{ marginLeft: 0, marginBottom: 12, listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 12 }}>
                  <button
                    onClick={() => setOpenSatNusa(v => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: openSatNusa ? 'linear-gradient(90deg, #16a34a 0%, #4ade80 100%)' : '#f1f5f9',
                      color: openSatNusa ? '#fff' : '#222',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 1.2rem',
                      fontWeight: 600,
                      fontSize: '1em',
                      boxShadow: openSatNusa ? '0 4px 16px #16a34a33' : '0 2px 8px #0001',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                      justifyContent: 'space-between',
                      marginBottom: 4
                    }}
                    aria-expanded={openSatNusa}
                  >
                    <span style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize:'1.1em'}}>System Support Analyst</span>
                      <span style={{fontWeight:400, fontSize:'0.95em', opacity:0.8, marginLeft:8}}>Feb 2019 – Mar 2022</span>
                    </span>
                    <span style={{fontSize:'1.3em'}}>{openSatNusa ? '▼' : '▶'}</span>
                  </button>
                  {openSatNusa && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ margin: '0.5rem 0 0 1.5rem', color: '#374151', fontSize: '1em', background: '#f8fafc', borderRadius: 8, padding: '1rem', boxShadow: '0 2px 8px #0001' }}
                    >
                      <li>Developed and implemented integration systems using SOAP, REST, and EDI, improving data exchange efficiency with external customers.</li>
                      <li>Reduced server-side resource usage by 25% by optimizing data requirements and automating daily report generation.</li>
                      <li>Developed Arduino code to fully automate the product packaging process, integrating manufacturing systems to reduce headcount and increase precision.</li>
                    </motion.ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div className={styles.text}>
              <h3 style={{marginTop: '0', marginBottom: '1.2rem', fontSize: '1.3em', fontWeight: 700, letterSpacing: 1, color: '#6366f1', display: 'flex', alignItems: 'center', gap: 12}}>
                <span style={{fontSize: '1.2em', color: '#222'}}>Education</span>
                <span style={{fontSize: '1.1em', color: '#aaa', fontWeight: 400}}>(School)</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <img src="/uib.webp" alt="Universitas Internasional Batam Logo" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6, boxShadow: '0 2px 8px #6366f122', background: '#fff', padding: 4 }} />
                <span style={{ fontWeight: 700, fontSize: '1.2em', color: '#2563eb', letterSpacing: 1 }}>Universitas Internasional Batam</span>
              </div>
              <div style={{ 
                background: '#f1f5f9',
                borderRadius: 8,
                padding: '0.7rem 1.2rem',
                boxShadow: '0 2px 8px #0001',
                marginBottom: 8
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.1em', fontWeight: 600 }}>Bachelor of Science in Computer Science</span>
                  <span style={{ fontWeight: 400, fontSize: '0.95em', opacity: 0.8 }}>Sep 2018 – Apr 2022</span>
                </div>
                <div style={{ marginTop: 4, color: '#374151', fontSize: '0.95em' }}>
                  GPA: 3.93 / 4.00
                </div>
                <ul style={{ margin: '1rem 0 0 1.2rem', padding: 0, color: '#374151', fontSize: '0.97em', lineHeight: 1.7 }}>
                  <li>Graduated with high distinction, building a strong foundation in programming, systems design, and data management.</li>
                  <li>Completed the Bangkit Academy (2021) — a prestigious tech program led by Google, Tokopedia, Gojek, and Traveloka:
                    <ul style={{ margin: '0.3rem 0 0 1.2rem', padding: 0 }}>
                      <li>Specialized in Machine Learning with hands-on projects.</li>
                      <li>Selected as a graduate with distinction for outstanding performance and team collaboration.</li>
                    </ul>
                  </li>
                  <li>Active member of the Information System Student Council:
                    <ul style={{ margin: '0.3rem 0 0 1.2rem', padding: 0 }}>
                      <li>Developed internal web tools for organizing campus events.</li>
                      <li>Mentored junior students during onboarding and technical workshops.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 