'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Projects.module.css';

// Define the type for GitHub repo
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  stargazers_count: number;
}

// For Medium RSS parsing
function parseMediumRSS(xml: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const items = Array.from(doc.querySelectorAll('item'));
  return items.slice(0, 4).map(item => ({
    title: item.querySelector('title')?.textContent || '',
    link: item.querySelector('link')?.textContent || '',
    pubDate: item.querySelector('pubDate')?.textContent || '',
  }));
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

const linkVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

function formatRepoName(name: string) {
  // Add space before capital letters, but not at the start
  return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/-/g, ' ');
}

export default function MyWorks() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [mediumPosts, setMediumPosts] = useState<{ title: string; link: string; pubDate: string }[]>([]);
  const [loadingMedium, setLoadingMedium] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/RyoKusnadi/repos?sort=updated')
      .then(res => res.json())
      .then((data: GitHubRepo[]) => {
        const filtered = data.filter(repo => !repo.fork && !repo.archived);
        filtered.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        setRepos(filtered.slice(0, 6));
        setLoading(false);
      });
    // Fetch Medium RSS
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ryo.kusnadi')
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setMediumPosts(data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
          })));
        }
        setLoadingMedium(false);
      });
  }, []);

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
        </motion.div>
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className={styles.subtitle} style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.2rem' }}>Featured Projects</h3>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading projects...</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.grid}
            >
              {repos.map((repo, index) => (
                <motion.article
                  key={repo.id}
                  variants={itemVariants}
                  className={styles.project}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <div className={styles.content} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 180, padding: '1.5rem 0' }}>
                    <motion.h3 
                      className={styles.projectTitle} 
                      style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: 8, textAlign: 'center', letterSpacing: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {formatRepoName(repo.name)}
                      <motion.span 
                        style={{ fontSize: '1rem', fontWeight: 500, marginLeft: 10, color: '#fbbf24', verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        ⭐ {repo.stargazers_count}
                      </motion.span>
                    </motion.h3>
                    <motion.div 
                      style={{ color: '#888', fontSize: '0.95em', marginBottom: 16, textAlign: 'center' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </motion.div>
                    <motion.div 
                      className={styles.tags} 
                      style={{ marginBottom: 16 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {repo.language && (
                        <motion.span 
                          className={styles.tag}
                          whileHover={{ scale: 1.1, backgroundColor: '#6366f1' }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {repo.language}
                        </motion.span>
                      )}
                    </motion.div>
                    <motion.div 
                      className={styles.links}
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: '#2563eb',
                          color: 'white'
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        GitHub
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
        <div>
          <h3 className={styles.subtitle} style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.2rem' }}>Recent Writing</h3>
          {loadingMedium ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading writing...</div>
          ) : (
            <div className={styles.grid}>
              {mediumPosts.map((post: any) => (
                <div key={post.link} className={styles.project} style={{ minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem' }}>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: '1.1rem', color: '#2563eb', textAlign: 'center', marginBottom: 8, textDecoration: 'none' }}>{post.title}</a>
                  <div style={{ color: '#888', fontSize: '0.95em', textAlign: 'center' }}>
                    <span style={{ marginRight: 8 }}>Created {new Date(post.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    {post.claps && (
                      <span style={{ marginLeft: 8, color: '#fbbf24' }}>👏 {post.claps}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 