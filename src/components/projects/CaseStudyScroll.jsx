"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyScroll = ({
  about,
  challange,
  solution,
  sidebarColor,
  underlineColor,
}) => {
  const { t } = useTranslation(["translation"]);

  const sections = [
    {
      id: "about",
      title: t("projectsAbout"),
      content: (
        <div className="space-y-4 text-[#1E1E1E]/80">
          <p>{about}</p>
        </div>
      ),
    },
    {
      id: "challenge",
      title: t("projectsChallenge"),
      content: (
        <div className="space-y-4 text-[#1E1E1E]/80">
          <p>{challange}</p>
        </div>
      ),
    },
    {
      id: "solution",
      title: t("projectsSolution"),
      content: (
        <div className="space-y-4 text-[#1E1E1E]/80">
          <p>{solution}</p>
        </div>
      ),
    },
  ];

  const [active, setActive] = useState(sections[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActive(id);
          }
        });
      },
      { threshold: [0, 0.25, 0.4, 0.6, 0.85, 1] }
    );

    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sections]);

  const activeIndex = sections.findIndex((s) => s.id === active);

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-10 md:gap-16">
        <aside className="md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
          <div className="relative h-full pl-6">
            {/* linha de fundo */}
            <div className="absolute rounded-full left-12 top-2 bottom-2 w-[5px] bg-[#D9D9D9]" />
            {/* barra de progresso */}
            <motion.div
              className={`absolute rounded-full left-12 w-[5px]`}
              style={{ backgroundColor: sidebarColor, top: 8 }}
              initial={{ height: 0 }}
              animate={{
                height: `${((activeIndex + 1) / sections.length) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
            {/* <nav className="flex flex-col gap-2">
              {sections.map((s, idx) => {
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    onClick={() =>
                      document.getElementById(s.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="relative text-left group">
                    <div className="flex items-center gap-3 py-2">
                      <span
                        className={`h-2 w-2 rounded-full border border-[#1E1E1E]/50 transition-colors ${
                          isActive ? "bg-[#1E1E1E]" : "bg-transparent"
                        }`}
                      />
                      <div className="relative">
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              layoutId="active-pill"
                              className="absolute -inset-1 rounded-full bg-[#1E1E1E]/10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </AnimatePresence>
                        <span
                          className={`relative z-10 px-2 py-0.5 text-sm tracking-wide uppercase ${
                            isActive
                              ? "text-[#1E1E1E]"
                              : "text-[#1E1E1E]/70 group-hover:text-[#1E1E1E]"
                          }`}></span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav> */}
          </div>
        </aside>
        {/* Content */}
        <main className="relative">
          {sections.map((s, idx) => (
            <Section
              key={s.id}
              id={s.id}
              ref={(el) => {
                sectionRefs.current[s.id] = el;
              }}
              index={idx}
              title={s.title}
              underlineColor={underlineColor}>
              {s.content}
            </Section>
          ))}
        </main>
      </div>
    </div>
  );
};

const Section = forwardRef(
  ({ id, title, index, children, underlineColor }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className="scroll-mt-24 py-24 first:pt-0 last:pb-32">
        <motion.h2
          className="text-3xl md:text-[32px] font-semibold tracking-tight text-[#1E1E1E]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}>
          {title}
        </motion.h2>
        <motion.div
          className="mt-6 md:text-[18px] text-[#1E1E1E]/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 * index }}>
          {children}
        </motion.div>
        <div
          className="mt-12 h-px w-full bg-gradient-to-r  via-transparent to-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${underlineColor} 30%, transparent)`,
          }}
        />
      </section>
    );
  }
);

Section.displayName = "Section";

export default CaseStudyScroll;
