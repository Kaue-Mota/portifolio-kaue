import { motion } from "framer-motion";
import { Code2, Sparkles, Target, Rocket } from "lucide-react";
import FloatingDots from "./FloatingDots";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const About = ({ lang }: { lang: Lang }) => {
  const t = translations[lang];

  const statsConfig = [
    { label: t.about_stat_projects, value: "10+" },
    { label: t.about_stat_tech, value: "10+" },
    { label: t.about_stat_focus, value: t.about_stat_value },
  ];
  const statIcons = [Rocket, Code2, Target];

  const valuesConfig = [
    { title: t.about_val_1_title, desc: t.about_val_1_desc },
    { title: t.about_val_2_title, desc: t.about_val_2_desc },
    { title: t.about_val_3_title, desc: t.about_val_3_desc },
    { title: t.about_val_4_title, desc: t.about_val_4_desc },
  ];
  const valueIcons = [Sparkles, Target, Code2, Rocket];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 150, damping: 18 } },
  };

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="hidden md:block blob-purple absolute top-20 -right-60 w-[600px] h-[600px] pointer-events-none opacity-30" />
      <div className="hidden md:block blob-blue absolute bottom-20 -left-50 w-[500px] h-[500px] pointer-events-none opacity-20" />

      <FloatingDots paletteIndex={1} />

      <div className="editorial-container relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-accent text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            {t.section_who}
          </p>
          <h2 className="headline-lg text-foreground mb-2">{t.section_about}</h2>
          <div className="editorial-divider-thick mb-10" />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {t.about_p2}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {t.about_p3}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row lg:flex-col gap-4">
              {statsConfig.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div key={stat.label} variants={itemVariants} className="group flex items-start gap-3.5 p-4 rounded-xl border border-border/30 hover:border-border/60 hover:bg-card/[0.03] transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-foreground leading-none" style={{ fontFamily: "var(--font-display)" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants} className="p-4 rounded-xl bg-muted/30 border border-border/20 mt-1">
                <blockquote>
                  <p className="text-base sm:text-lg italic text-foreground/70 leading-snug" style={{ fontFamily: "var(--font-italic)" }}>
                    {t.about_quote}
                  </p>
                  <cite className="text-xs text-muted-foreground mt-2 block not-italic">
                    {t.about_quote_cite}
                  </cite>
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Values grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-2">
                {t.section_values}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {t.section_what_drives}
              </h3>
            </div>
            <div className="hidden sm:block h-px flex-1 ml-8 mb-3 bg-border/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuesConfig.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-5 rounded-xl border border-border/30 hover:border-border/60 hover:bg-card/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
