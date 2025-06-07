'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.08 + 0.2,
    },
  }),
};

const categories = [
  {
    title: '💻 Programming Languages',
    skills: [
      '⚡️ Golang — Scalable backend services',
      '🐍 Python — Automation, scripting, data tasks',
      '🏢 C# — Enterprise & manufacturing apps',
      '🌐 JavaScript/TypeScript — Web & API development',
    ],
  },
  {
    title: '🗃 Databases & Messaging',
    skills: [
      '🗄️ PostgreSQL/MySQL — Relational data & transactions',
      '🚀 Kafka — Event streaming & messaging',
      '⚡️ Redis — Caching & pub/sub',
      '📦 Protobuf — Fast RPC serialization',
    ],
  },
  {
    title: '🧱 Infrastructure & DevOps',
    skills: [
      '🐳 Docker — Containerization & orchestration',
      '🔄 CI/CD — Automated deployment & testing',
      '🔎 CDC — Real-time sync & anomaly detection',
      '📊 Monitoring — Dashboards & alerting',
    ],
  },
  {
    title: '🧩 System Design',
    skills: [
      '🌍 Distributed Systems — Scalable, reliable services',
      '🧩 Microservices — Modular architecture',
      '🔒 Data Consistency — Idempotency, accuracy',
    ],
  },
  {
    title: '⚙️ Tools & Frameworks',
    skills: [
      '🛠️ Git, Postman, Insomnia, VS Code, IntelliJ',
      '🤖 Arduino — Automation & prototyping',
      '🔗 EDI, REST, SOAP — System integration',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.title}>🛠 Skills & Expertise</h2>
          <p className={styles.subtitle}>
            My core technologies and tools:
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.skillsGrid}
        >
          {categories.map((cat, i) => (
            <motion.div
              className={styles.category}
              key={cat.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <ul className={styles.skillList}>
                {cat.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    custom={j}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ listStyle: 'disc', marginLeft: 18 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 