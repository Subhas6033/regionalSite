import { memo } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Education = memo(() => {
  const { t } = useLanguage();
  const institutions = [
    {
      name: t('kotulpurCentralSchool'),
      level: t('k12'),
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600',
      desc: t('kotulpurCentralSchoolDesc'),
      students: '1500+'
    },
    {
      name: t('govindaramCollege'),
      level: t('higherEducation'),
      img: 'https://images.unsplash.com/photo-1541339907198-e087fc25b3f5?w=600',
      desc: t('govindaramCollegeDesc'),
      students: '3000+'
    },
    {
      name: t('tinyTotsPreSchool'),
      level: t('prePrimary'),
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffea?w=600',
      desc: t('tinyTotsPreSchoolDesc'),
      students: '200+'
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
              <span>📚</span> {t('educationServices')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('educationHero')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('educationHeroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutions */}
      <Section background="default">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('educationalInstitutions')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('educationalInstitutions')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('institutionsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card padding="none" className="overflow-hidden cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                    {inst.level}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{inst.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{inst.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-2xl font-bold text-slate-900">{inst.students}</span>
                    <Button variant="ghost" size="sm" className="cursor-pointer">{t('learnMore')}</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section background="accent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('beyondTextbooks')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('holisticDevelopment')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('holisticDesc')}
            </p>
            <div className="space-y-3">
              {[
                { icon: '🎨', title: t('artsMusic'), desc: t('artsMusicDesc') },
                { icon: '🏆', title: t('sportsExcellence'), desc: t('sportsExcellenceDesc') },
                { icon: '💻', title: t('techEducation'), desc: t('techEducationDesc') },
                { icon: '🌱', title: t('environmentalLearning'), desc: t('environmentalLearningDesc') },
              ].map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <span className="text-xl">{program.icon}</span>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">{program.title}</h4>
                    <p className="text-slate-500 text-xs">{program.desc}</p>
                  </div>
                </motion.div>
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
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800"
                alt="Students learning"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="dark">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: '5,000+', label: t('students') },
            { num: '200+', label: t('teachers') },
            { num: '95%', label: t('passRate') },
            { num: '50+', label: t('awards') },
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

Education.displayName = 'Education';

export default Education;
