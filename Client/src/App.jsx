import { memo, lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import Preloader from './components/Preloader';

const Loader = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex items-center justify-center min-h-screen"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-10 h-10 border-2 border-slate-200 border-t-slate-800 rounded-full"
    />
  </motion.div>
));

Loader.displayName = 'Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const Education = lazy(() => import('./pages/Education'));
const Markets = lazy(() => import('./pages/Markets'));
const Transport = lazy(() => import('./pages/Transport'));
const Contact = lazy(() => import('./pages/Contact'));

const App = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const links = [
    { href: '/', translationKey: 'home' },
    { href: '/about', translationKey: 'about' },
    { href: '/healthcare', translationKey: 'healthcare' },
    { href: '/education', translationKey: 'education' },
    { href: '/markets', translationKey: 'markets' },
    { href: '/transport', translationKey: 'transport' },
    { href: '/contact', translationKey: 'contact' },
  ];

  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatePresence>
          {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="min-h-screen bg-slate-50">
              <Navbar links={links} />
              <main>
                <Suspense fallback={<Loader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/healthcare" element={<Healthcare />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/markets" element={<Markets />} />
                    <Route path="/transport" element={<Transport />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </BrowserRouter>
    </LanguageProvider>
  );
});

App.displayName = 'App';

export default App;
