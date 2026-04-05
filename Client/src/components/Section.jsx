import { memo } from 'react';
import { motion } from 'motion/react';

const Section = memo(({
  children,
  id,
  className = '',
  fullHeight = false,
  background = 'default',
  ...props
}) => {
  const backgrounds = {
    default: 'bg-white',
    dark: 'bg-slate-900',
    accent: 'bg-slate-50',
    warm: 'bg-amber-50/30',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${fullHeight ? 'min-h-screen' : ''} pt-24 pb-20 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;
