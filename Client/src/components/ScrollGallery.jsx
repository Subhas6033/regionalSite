import { memo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600',
    alt: 'Central Park',
    title: 'Central Park',
    desc: 'A peaceful green space in the heart of Kotulpur'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
    alt: 'Local Market',
    title: 'Local Market',
    desc: 'Vibrant marketplace with fresh produce daily'
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
    alt: 'Community Hall',
    title: 'Community Hall',
    desc: 'Where traditions come alive and memories are made'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
    alt: 'Sports Complex',
    title: 'Sports Complex',
    desc: 'State-of-the-art facilities for all sports enthusiasts'
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ca?w=600',
    alt: 'Festival Celebration',
    title: 'Festival Celebration',
    desc: 'Our vibrant community celebrations bring joy to all'
  },
];

const ScrollGallery = memo(() => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-slate-50">
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3"
          >
            Glimpse of Kotulpur
          </motion.h2>
          <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
            Explore the beauty and vibrancy of our locality through these captured moments
          </p>

          <div className="relative w-full h-[400px] flex items-center justify-center">
            {images.map((image, index) => {
              const range = 1 / images.length;
              const start = index * range;
              const end = (index + 1) * range;

              const opacity = useTransform(
                smoothProgress,
                [start, start + range * 0.3, end - range * 0.3, end],
                [0, 1, 1, 0]
              );

              const y = useTransform(
                smoothProgress,
                [start, end],
                [100, 0]
              );

              const scale = useTransform(
                smoothProgress,
                [start, start + range * 0.3, end - range * 0.3, end],
                [0.8, 1, 1, 0.8]
              );

              return (
                <motion.div
                  key={image.src}
                  style={{ opacity, y, scale }}
                  className="absolute w-full max-w-md mx-auto"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[320px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-base font-semibold text-white mb-0.5">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ScrollGallery.displayName = 'ScrollGallery';

export default ScrollGallery;
