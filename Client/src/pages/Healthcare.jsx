import { memo } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Healthcare = memo(() => {
  const { t } = useLanguage();
  const facilities = [
    {
      name: t('communityHealthCenter'),
      type: t('primaryCare'),
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd91?w=600',
      desc: t('communityHealthCenterDesc'),
      beds: t('beds')
    },
    {
      name: t('lifecareDiagnostics'),
      type: t('diagnosticLab'),
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600',
      desc: t('lifecareDiagnosticsDesc'),
      tests: t('tests')
    },
    {
      name: t('dentalCarePlus'),
      type: t('dentalClinic'),
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600',
      desc: t('dentalCarePlusDesc'),
      doctors: t('doctors')
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-slate-50">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-6">
              <span>🏥</span> {t('healthcareServices')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('healthcareHero')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('healthcareHeroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <Section background="default">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('medicalFacilities')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('medicalFacilities')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('medicalFacilitiesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card padding="none" className="overflow-hidden cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.img}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                    {facility.type}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{facility.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{facility.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-2xl font-bold text-slate-900">
                      {facility.beds || facility.tests || facility.doctors}
                    </span>
                    <Button variant="ghost" size="sm" className="cursor-pointer">{t('details')}</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="accent">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('servicesWeOffer')}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '🚑', title: t('emergencyCare'), desc: t('emergencyCareDesc') },
            { icon: '👩‍⚕️', title: t('generalMedicine'), desc: t('generalMedicineDesc') },
            { icon: '🩺', title: t('diagnostics'), desc: t('diagnosticsDesc') },
            { icon: '💊', title: t('pharmacy'), desc: t('pharmacyDesc') },
            { icon: '🏥', title: t('inpatientCare'), desc: t('inpatientCareDesc') },
            { icon: '🦷', title: t('dentalServices'), desc: t('dentalServicesDesc') },
            { icon: '👁️', title: t('eyeCare'), desc: t('eyeCareDesc') },
            { icon: '🧘', title: t('wellness'), desc: t('wellnessDesc') },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Card className="text-center h-full cursor-pointer">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{service.title}</h4>
                <p className="text-slate-500 text-xs">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="dark">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: '10,000+', label: t('patientsYearly') },
            { num: '25+', label: t('qualifiedDoctors') },
            { num: '24/7', label: t('emergency') },
            { num: '98%', label: t('satisfaction') },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.num}
              </h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
});

Healthcare.displayName = 'Healthcare';

export default Healthcare;
