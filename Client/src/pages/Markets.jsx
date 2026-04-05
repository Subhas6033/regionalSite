import { memo } from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Markets = memo(() => {
  const { t } = useLanguage();
  const markets = [
    {
      name: t('centralMarket'),
      type: t('wholesaleRetail'),
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      desc: t('centralMarketDesc'),
      vendors: '200+'
    },
    {
      name: t('morningVegSquare'),
      type: t('freshProduce'),
      img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600',
      desc: t('morningVegSquareDesc'),
      vendors: '50+'
    },
    {
      name: t('textileEmporium'),
      type: t('clothingFabric'),
      img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600',
      desc: t('textileEmporiumDesc'),
      vendors: '30+'
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
              <span>🛒</span> {t('localMarkets')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('marketsHero')}
            </h1>
            <p className="text-lg text-slate-600">
              {t('marketsHeroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Markets */}
      <Section background="default">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            {t('ourMarkets')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('ourMarkets')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('marketsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card padding="none" className="overflow-hidden cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={market.img}
                    alt={market.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                    {market.type}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{market.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{market.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-2xl font-bold text-slate-900">{market.vendors}</span>
                    <Button variant="ghost" size="sm" className="cursor-pointer">{t('view')}</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section background="accent">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('whatYouCanFind')}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: '🥬', title: t('freshVegetables') },
            { icon: '🍎', title: t('fruits') },
            { icon: '🍞', title: t('bakedGoods') },
            { icon: '🥩', title: t('meatFish') },
            { icon: '🧵', title: t('textiles') },
            { icon: '🏺', title: t('handicrafts') },
            { icon: '🌶️', title: t('spices') },
            { icon: '🥣', title: t('dairyProducts') },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Card className="text-center cursor-pointer py-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-slate-700">{item.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Special Features */}
      <Section background="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
              {t('freshFromFarm')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('farmToTable')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('farmToTableDesc')}
            </p>
            <div className="space-y-3">
              {[
                { icon: '🌅', title: t('earlyBirdSpecial'), desc: t('earlyBirdSpecialDesc') },
                { icon: '💚', title: t('organicSection'), desc: t('organicSectionDesc') },
                { icon: '🏷️', title: t('weeklyDiscounts'), desc: t('weeklyDiscountsDesc') },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
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
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800"
                alt="Fresh produce"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
});

Markets.displayName = 'Markets';

export default Markets;
