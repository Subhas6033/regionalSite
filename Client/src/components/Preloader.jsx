import { memo } from 'react';
import { motion } from 'motion/react';

const Preloader = memo(({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="text-5xl font-bold text-slate-900 mb-3">
          Kotulpur
        </div>
        <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1/2 h-full bg-slate-900 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;
