import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MyWorks from './components/MyWorks';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <MyWorks />
      <Contact />
      <Footer />
    </main>
  );
}
