import { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const About = memo(() => {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              {t('ourStory')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('aboutKotulpur')}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {t('aboutDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="cursor-pointer">
                <Button size="lg">{t('exploreServices')}</Button>
              </Link>
              <Link to="/contact" className="cursor-pointer">
                <Button variant="secondary" size="lg">{t('contactUs')}</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <Section background="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('ourHeritage')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('legacyOfProgress')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('legacyDesc')}
            </p>
            <p className="text-slate-600 mb-6">
              {t('legacyDesc2')}
            </p>
            <Link to="/contact" className="cursor-pointer">
              <Button variant="outline">{t('learnMore')}</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
          >
            <div className="bg-slate-900 rounded-2xl h-80 flex items-center justify-center shadow-xl">
              <span className="text-7xl">🏛️</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="accent">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('whatWeStandFor')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('ourValues')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('valuesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🤝', title: t('unity'), desc: t('unityDesc') },
            { icon: '📚', title: t('educationValue'), desc: t('educationValueDesc') },
            { icon: '🎭', title: t('culture'), desc: t('cultureDesc') },
            { icon: '🌱', title: t('growth'), desc: t('growthDesc') },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="text-center h-full cursor-pointer">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-semibold text-slate-900 text-lg mb-1">{value.title}</h4>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="dark">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { num: '5,000+', label: t('residents') },
            { num: '100+', label: t('businesses') },
            { num: '50+', label: t('yearsOfHistory') },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.num}
              </h3>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="default">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('wantToLearnMore')}
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            {t('wantToLearnMoreDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="cursor-pointer">
              <Button size="lg">{t('ourServices')}</Button>
            </Link>
            <Link to="/contact" className="cursor-pointer">
              <Button variant="secondary" size="lg">{t('contactUs')}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
});

About.displayName = 'About';

export default About;
