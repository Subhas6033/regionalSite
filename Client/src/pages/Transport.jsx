import { memo } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Transport = memo(() => {
  const { t } = useLanguage();
  const routes = [
    { from: 'Kotulpur', to: t('cityCenter'), frequency: t('every15min'), icon: '🏙️' },
    { from: 'Kotulpur', to: t('railwayStation'), frequency: t('every30min'), icon: '🚂' },
    { from: 'Kotulpur', to: t('busTerminal'), frequency: t('every20min'), icon: '🚌' },
    { from: 'Kotulpur', to: t('airport'), frequency: t('everyHour'), icon: '✈️' },
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
              <span>🚗</span> {t('transportServices')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('transportHero')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('transportHeroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Routes */}
      <Section background="default">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('publicTransport')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('transportRoutes')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('routesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {routes.map((route, i) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-4 cursor-pointer">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {route.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    {route.from} → {route.to}
                  </h4>
                  <p className="text-sm text-slate-500">{route.frequency}</p>
                </div>
                <Button variant="secondary" size="sm" className="cursor-pointer">{t('schedule')}</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section background="accent">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('transportOptions')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('howYouCanTravel')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🚌', title: t('cityBuses'), desc: t('cityBusesDesc'), features: [t('acNonAc'), t('studentPasses'), t('seniorDiscounts')] },
            { icon: '🚕', title: t('autoTaxi'), desc: t('autoTaxiDesc'), features: [t('availability247'), t('gpsTracked'), t('meteredFares')] },
            { icon: '🚲', title: t('cycleStation'), desc: t('cycleStationDesc'), features: [t('firstHourFree'), t('multipleStations'), t('electricCycles')] },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Infrastructure */}
      <Section background="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('infrastructure')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('roadImprovements')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('roadDesc')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '50+ km', label: t('pavedRoads') },
                { num: '15', label: t('busStops') },
                { num: '5', label: t('parkingZones') },
                { num: '3', label: t('cycleTracks') },
              ].map((stat, i) => (
                <div key={stat.label} className="p-4 bg-slate-50 rounded-xl text-center">
                  <h4 className="text-2xl font-bold text-slate-900">{stat.num}</h4>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
                alt="Road infrastructure"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
});

Transport.displayName = 'Transport';

export default Transport;
