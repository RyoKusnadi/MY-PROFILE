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
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                >
                  <div className={styles.content} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 180, padding: '1.5rem 0' }}>
                    <h3 className={styles.projectTitle} style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: 8, textAlign: 'center', letterSpacing: 0.5 }}>
                      {formatRepoName(repo.name)}
                      <span style={{ fontSize: '1rem', fontWeight: 500, marginLeft: 10, color: '#fbbf24', verticalAlign: 'middle', display: 'inline-flex', alignItems: 'center' }}>
                        ⭐ {repo.stargazers_count}
                      </span>
                    </h3>
                    <div style={{ color: '#888', fontSize: '0.95em', marginBottom: 16, textAlign: 'center' }}>
                      Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                    <div className={styles.tags} style={{ marginBottom: 16 }}>
                      {repo.language && (
                        <span className={styles.tag}>{repo.language}</span>
                      )}
                    </div>
                    <div className={styles.links}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        GitHub
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
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