'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'My Works', href: '#my-works' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <div className={styles.logoText}>R</div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`${styles.navLink} ${
                activeSection === item.href.substring(1) ? styles.active : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    activeSection === item.href.substring(1) ? styles.active : ''
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={e => {
                    e.preventDefault();
                    const sectionId = item.href.replace('#', '');
                    const section = document.getElementById(sectionId);
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      // Force override overflow to auto with !important
                      document.body.style.setProperty('overflow', 'auto', 'important');
                      document.documentElement.style.setProperty('overflow', 'auto', 'important');
                      const bodyOverflow = document.body.style.overflow;
                      const htmlOverflow = document.documentElement.style.overflow;
                      const computedBodyOverflow = window.getComputedStyle(document.body).overflow;
                      const computedHtmlOverflow = window.getComputedStyle(document.documentElement).overflow;
                      console.log('Body overflow:', bodyOverflow, '| Computed:', computedBodyOverflow);
                      console.log('HTML overflow:', htmlOverflow, '| Computed:', computedHtmlOverflow);
                      console.log('Scroll position before:', window.scrollY);
                      if (section) {
                        // Get header height
                        const header = document.querySelector('header');
                        const headerHeight = header ? header.offsetHeight : 64;
                        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                          top: sectionTop - headerHeight,
                          behavior: 'smooth'
                        });
                        document.documentElement.scrollTo({
                          top: sectionTop - headerHeight,
                          behavior: 'smooth'
                        });
                        setTimeout(() => {
                          console.log('Scroll position after:', window.scrollY);
                        }, 700);
                        let parent = section.parentElement;
                        while (parent && parent !== document.body) {
                          const overflowY = window.getComputedStyle(parent).overflowY;
                          if (overflowY === 'auto' || overflowY === 'scroll') {
                            console.log('Found scrollable parent:', parent);
                            parent.scrollTo({
                              top: section.offsetTop - headerHeight,
                              behavior: 'smooth'
                            });
                            break;
                          }
                          parent = parent.parentElement;
                        }
                      }
                      // Restore scrolling after closing menu
                      document.body.style.setProperty('overflow', 'auto', 'important');
                      document.documentElement.style.setProperty('overflow', 'auto', 'important');
                    }, 350); // Wait for menu exit animation
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 