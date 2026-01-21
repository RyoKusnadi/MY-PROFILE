'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './Projects.module.css';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string;
  updated_at: string;
  stargazers_count: number;
};

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring' as const,
      stiffness: 120,
    },
  },
};

function formatRepoName(name: string) {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/-/g, ' ');
}

type Props = {
  repos: Repo[];
  mediumPosts: MediumPost[];
};

export function MyWorksClient({ repos, mediumPosts }: Props) {
  return (
    <section id="my-works" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.title}>My Works</h2>
          <p className={styles.subtitle}>Selected builds and recent writing</p>
        </motion.div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.subtitle}>Featured Projects</h3>
          </div>
          {repos.length === 0 ? (
            <div className={styles.emptyState}>Projects are loading. Please try again shortly.</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.grid}
            >
              {repos.map((repo) => (
                <motion.article
                  key={repo.id}
                  variants={itemVariants}
                  className={styles.project}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                  }}
                >
                  <div className={styles.content}>
                    <div className={styles.projectHeading}>
                      <h3 className={styles.projectTitle}>{formatRepoName(repo.name)}</h3>
                      <span className={styles.star}>⭐ {repo.stargazers_count}</span>
                    </div>
                    <p className={styles.description}>
                      {repo.description ?? 'Backend and reliability focused project.'}
                    </p>
                    <div className={styles.metaRow}>
                      <span className={styles.meta}>
                        Updated{' '}
                        {new Date(repo.updated_at).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      {repo.language && <span className={styles.tag}>{repo.language}</span>}
                    </div>
                    <div className={styles.links}>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        GitHub
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.subtitle}>Recent Writing</h3>
          </div>
          {mediumPosts.length === 0 ? (
            <div className={styles.emptyState}>Articles are loading. Check back soon.</div>
          ) : (
            <div className={styles.grid}>
              {mediumPosts.map((post) => (
                <article key={post.link} className={styles.project}>
                  <div className={styles.content}>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.articleLink}>
                      {post.title}
                    </a>
                    <div className={styles.meta}>
                      {new Date(post.pubDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

