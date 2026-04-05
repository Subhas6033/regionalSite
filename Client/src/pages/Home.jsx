import { memo, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import PopularSection from '../components/PopularSection';
import { useLanguage } from '../context/LanguageContext';

const Hero = memo(() => {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">
              {t('welcomeToKotulpur')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            <span className="block text-lg md:text-xl font-medium text-slate-500 mb-3">
              {t('discover')}
            </span>
            {t('theBeautyOfKotulpur')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            {t('tagline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/about" className="cursor-pointer">
              <Button size="lg">
                <span className="flex items-center gap-2">
                  {t('discoverKotulpur')}
                  <span>→</span>
                </span>
              </Button>
            </Link>
            <Link to="/services" className="cursor-pointer">
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  {t('ourServices')}
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Local Businesses' },
              { number: '10K+', label: 'Happy Residents' },
              { number: '100+', label: 'Events Yearly' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-slate-400 text-xs font-medium tracking-wider uppercase mb-2">{t('scroll')}</span>
          <div className="w-5 h-8 border border-slate-300 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-slate-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

const Home = memo(() => {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <PopularSection />
      <Section background="default">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {t('ourServicesTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            {t('comprehensiveServices')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏥', title: t('healthcare'), desc: t('healthcareDesc'), link: '/healthcare' },
            { icon: '🏫', title: t('education'), desc: t('educationDesc'), link: '/education' },
            { icon: '🛒', title: t('markets'), desc: t('marketsDesc'), link: '/markets' },
            { icon: '🚗', title: t('transport'), desc: t('transportDesc'), link: '/transport' },
          ].map((service) => (
            <Link key={service.title} to={service.link} className="cursor-pointer">
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{service.desc}</p>
                <span className="text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-700 transition-colors">
                  {t('learnMore')} →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="accent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('communityCares')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('communityCaresDesc')}
            </p>
            <p className="text-slate-600 mb-8">
              {t('communityCaresDesc2')}
            </p>
            <Link to="/about" className="cursor-pointer">
              <Button>{t('learnMore')}</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ca?w=800"
                alt="Community gathering"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="dark" className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('growingCommunity')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            {t('growingCommunityDesc')}
          </p>
          <Link to="/contact" className="cursor-pointer">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              {t('contactUs')}
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
});

Home.displayName = 'Home';

export default Home;