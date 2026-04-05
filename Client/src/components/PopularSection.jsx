import { memo, useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const popularImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
    alt: "Mountain Landscape",
    title: "Mountain Views",
    desc: "Breathtaking mountain ranges",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
    alt: "Sunset Beach",
    title: "Golden Sunsets",
    desc: "Beautiful evening views",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=800&fit=crop",
    alt: "Starry Night",
    title: "Starry Nights",
    desc: "Crystal clear night skies",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop",
    alt: "Forest Trail",
    title: "Forest Trails",
    desc: "Serene paths through forests",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop",
    alt: "Lake Reflection",
    title: "Peaceful Lakes",
    desc: "Tranquil water reflections",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=800&fit=crop",
    alt: "Desert Dunes",
    title: "Golden Dunes",
    desc: "Mesmerizing sand dunes",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=800&fit=crop",
    alt: "Misty Mountains",
    title: "Morning Mist",
    desc: "Ethereal valley mist",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    alt: "River Valley",
    title: "River Valley",
    desc: "Life flows through Kotulpur",
  },
];

const PopularSection = memo(() => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const IMAGE_WIDTH = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.8, 500) : 400;
  const IMAGE_HEIGHT = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.4, 250) : 200;

  useEffect(() => {
    if (!isPaused && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) =>
          prev < popularImages.length - 1 ? prev + 1 : 0,
        );
      }, 3500);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, isDragging]);

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - dragStart;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = IMAGE_WIDTH * 0.15;
    if (dragOffset > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (
      dragOffset < -threshold &&
      activeIndex < popularImages.length - 1
    ) {
      setActiveIndex(activeIndex + 1);
    }
    setDragOffset(0);
  };

  const goToPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const goToNext = () =>
    setActiveIndex((prev) => Math.min(popularImages.length - 1, prev + 1));

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-50 py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-sm font-medium mb-4">
            {t('featuredGallery')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('popularInKotulpur')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('discoverLoved')}
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div
          className="relative flex justify-center select-none"
          style={{ height: IMAGE_HEIGHT + 80 }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {popularImages.map((image, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);

              let translateX = 0;
              let scale = 1;
              let rotateY = 0;
              let zIndex = 10;
              let opacity = 0.25;

              if (absOffset === 0) {
                translateX = dragOffset * 0.25;
                scale = 1;
                rotateY = 0;
                zIndex = 20;
                opacity = 1;
              } else if (absOffset === 1) {
                translateX =
                  (offset > 0 ? IMAGE_WIDTH * 0.55 : -IMAGE_WIDTH * 0.55) +
                  dragOffset * 0.12;
                scale = 0.82;
                rotateY = offset > 0 ? -28 : 28;
                zIndex = 15;
                opacity = 0.7;
              } else if (absOffset === 2) {
                translateX =
                  (offset > 0 ? IMAGE_WIDTH * 1.15 : -IMAGE_WIDTH * 1.15) +
                  dragOffset * 0.06;
                scale = 0.65;
                rotateY = offset > 0 ? -48 : 48;
                zIndex = 10;
                opacity = 0.35;
              } else if (absOffset === 3) {
                translateX =
                  (offset > 0 ? IMAGE_WIDTH * 1.8 : -IMAGE_WIDTH * 1.8) +
                  dragOffset * 0.03;
                scale = 0.45;
                rotateY = offset > 0 ? -65 : 65;
                zIndex = 5;
                opacity = 0.1;
              } else {
                translateX =
                  offset > 0 ? IMAGE_WIDTH * 2.5 : -IMAGE_WIDTH * 2.5;
                scale = 0.25;
                rotateY = offset > 0 ? -80 : 80;
                zIndex = 1;
                opacity = 0;
              }

              return (
                <motion.div
                  key={image.src}
                  animate={{
                    opacity,
                    x: translateX,
                    scale,
                    rotateY,
                    zIndex,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    transformStyle: "preserve-3d",
                  }}
                  className="cursor-pointer"
                >
                  <div
                    className={`relative w-full h-full overflow-hidden rounded-xl shadow-lg ${
                      index === activeIndex
                        ? "ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50"
                        : ""
                    }`}
                    style={{
                      transform: `perspective(1200px) rotateY(${rotateY}deg)`,
                    }}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          index === activeIndex ? { y: 0, opacity: 1 } : {}
                        }
                        className="text-lg font-semibold text-white mb-1"
                      >
                        {image.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          index === activeIndex ? { y: 0, opacity: 1 } : {}
                        }
                        transition={{ delay: 0.08 }}
                        className="text-white/75 text-sm"
                      >
                        {image.desc}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <motion.button
            onClick={goToPrev}
            disabled={activeIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className={`w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-slate-50 hover:shadow-md"
            }`}
          >
            <svg
              className="w-5 h-5 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <div className="flex gap-2 px-4 py-2 bg-white rounded-full border border-slate-100">
            {popularImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale: index === activeIndex ? 1.3 : 1,
                  backgroundColor:
                    index === activeIndex ? "#475569" : "#cbd5e1",
                }}
                whileHover={{ scale: 1.2 }}
                className="h-2 w-2 rounded-full transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            disabled={activeIndex === popularImages.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className={`w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer ${
              activeIndex === popularImages.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-slate-50 hover:shadow-md"
            }`}
          >
            <svg
              className="w-5 h-5 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Status Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-sm text-slate-500"
        >
          {isPaused ? (
            <span className="flex items-center justify-center gap-2 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {t('dragToExplore')}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block w-2 h-2 bg-slate-500 rounded-full"
              />
              {t('autoPlaying')}
            </span>
          )}
        </motion.p>
      </div>
    </section>
  );
});

PopularSection.displayName = "PopularSection";

export default PopularSection;
