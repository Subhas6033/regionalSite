import { memo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

const Navbar = memo(({ links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, setCurrentLang, languages, t } = useLanguage();
  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(e.target) &&
        mobileLangRef.current &&
        !mobileLangRef.current.contains(e.target)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <span className="text-2xl font-bold text-slate-800">Kotulpur</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium text-sm cursor-pointer"
              >
                {t(link.translationKey)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={desktopLangRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-sm font-medium text-slate-700 cursor-pointer"
              >
                {currentLang.native}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangChange(lang)}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 cursor-pointer ${currentLang.code === lang.code ? "text-slate-900 font-medium" : "text-slate-600"}`}
                      >
                        {lang.native}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/contact">
              <Button size="sm">{t("contactUs")}</Button>
            </Link>
          </div>

          {/* Mobile Language Selector - Visible on small screens */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-sm font-medium text-slate-700 cursor-pointer"
              >
                {currentLang.native}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangChange(lang)}
                        className={`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 cursor-pointer ${currentLang.code === lang.code ? "text-slate-900 font-medium" : "text-slate-600"}`}
                      >
                        {lang.native} {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer"
            >
              <div className="w-5 h-0.5 bg-slate-700 mb-1" />
              <div className="w-5 h-0.5 bg-slate-700 mb-1" />
              <div className="w-5 h-0.5 bg-slate-700" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium py-2 cursor-pointer"
                  >
                    {t(link.translationKey)}
                  </Link>
                ))}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLangChange(lang);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer ${currentLang.code === lang.code ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="mt-2 w-full cursor-pointer">
                    {t("contactUs")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
