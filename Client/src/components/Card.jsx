import { memo } from 'react';
import { motion } from 'motion/react';

const Card = memo(({
  children,
  className = '',
  hover = true,
  padding = 'md',
  ...props
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)' } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-white rounded-xl shadow-sm border border-slate-100 ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
