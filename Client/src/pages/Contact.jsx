import { memo, useState } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Contact = memo(() => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 bg-slate-50">
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
              {t('getInTouch')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('contact')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('contactUsDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section background="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('sendMessage')}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('sendUsAMessage')}</h2>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('yourName')}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all text-slate-900 bg-white text-sm cursor-text"
                    placeholder={t('enterYourName')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('emailAddress')}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all text-slate-900 bg-white text-sm cursor-text"
                    placeholder={t('enterYourEmail')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('message')}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 outline-none transition-all resize-none text-slate-900 bg-white text-sm cursor-text"
                    placeholder={t('howCanWeHelp')}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full cursor-pointer">
                  {submitted ? t('messageSent') : t('send')}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('contactInformation')}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">{t('getInTouch')}</h2>

            <div className="space-y-4">
              {[
                { icon: '📍', title: t('location'), info: t('locationInfo') },
                { icon: '📞', title: t('phone'), info: t('phoneInfo') },
                { icon: '✉️', title: t('email'), info: t('emailInfo') },
                { icon: '🕐', title: t('hours'), info: t('hoursInfo') },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.info}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">{t('followUs')}</h4>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram'].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center text-white text-sm font-medium cursor-pointer transition-colors"
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Emergency Contacts */}
      <Section background="dark">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t('emergencyContacts')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: '🚑', title: t('emergencyServices'), num: '108' },
            { icon: '👮', title: t('police'), num: '100' },
            { icon: '🔥', title: t('fireBrigade'), num: '101' },
          ].map((emergency, i) => (
            <motion.div
              key={emergency.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="text-center cursor-pointer">
                <div className="text-4xl mb-3">{emergency.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{emergency.title}</h4>
                <p className="text-2xl font-bold text-slate-900">{emergency.num}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;
