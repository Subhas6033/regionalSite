import { memo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Services = memo(() => {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-slate-50">
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
              {t('services')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('servicesWeProvide')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('servicesDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Essential Services */}
      <Section background="default">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('essentialInfrastructure')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('coreServices')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('coreServicesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '💧', title: t('waterSupply'), desc: t('waterSupplyDesc'), link: '/healthcare' },
            { icon: '⚡', title: t('electricity'), desc: t('electricityDesc'), color: 'from-amber-500 to-orange-500' },
            { icon: '🏥', title: t('healthcare'), desc: t('healthcareDesc'), link: '/healthcare' },
            { icon: '🏫', title: t('education'), desc: t('educationDesc'), link: '/education' },
            { icon: '🛒', title: t('markets'), desc: t('marketsDesc'), link: '/markets' },
            { icon: '🚗', title: t('transport'), desc: t('transportDesc'), link: '/transport' },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="h-full cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="font-semibold text-slate-900 text-lg mb-2">{service.title}</h4>
                <p className="text-slate-500 text-sm mb-4">{service.desc}</p>
                {service.link && (
                  <Link to={service.link} className="cursor-pointer">
                    <span className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
                      {t('learnMore')} →
                    </span>
                  </Link>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Community Programs */}
      <Section background="accent">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('communityPrograms')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('togetherWeGrow')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { icon: '🌿', title: t('greenInitiative'), desc: t('greenInitiativeDesc') },
            { icon: '👴', title: t('seniorCitizenCare'), desc: t('seniorCitizenCareDesc') },
            { icon: '👶', title: t('youthDevelopment'), desc: t('youthDevelopmentDesc') },
            { icon: '🎨', title: t('culturalPreservation'), desc: t('culturalPreservationDesc') },
          ].map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="flex gap-5 cursor-pointer">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {program.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-1">{program.title}</h4>
                  <p className="text-slate-500 text-sm mb-3">{program.desc}</p>
                  <Button variant="ghost" size="sm" className="cursor-pointer">{t('getInvolved')}</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('needAssistance')}
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          {t('needAssistanceDesc')}
        </p>
        <Link to="/contact" className="cursor-pointer">
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            {t('contactSupport')}
          </Button>
        </Link>
      </Section>
    </>
  );
});

Services.displayName = 'Services';

export default Services;
