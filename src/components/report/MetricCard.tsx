import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
  accent: "blue" | "red" | "yellow" | "green";
  index?: number;
}

const accentMap = {
  blue: { bg: "bg-ga-blue", text: "text-ga-blue", soft: "bg-ga-blue/10" },
  red: { bg: "bg-ga-red", text: "text-ga-red", soft: "bg-ga-red/10" },
  yellow: { bg: "bg-ga-yellow", text: "text-ga-yellow", soft: "bg-ga-yellow/15" },
  green: { bg: "bg-ga-green", text: "text-ga-green", soft: "bg-ga-green/10" },
};

export function MetricCard({ value, label, description, icon, accent, index = 0 }: MetricCardProps) {
  const a = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 md:p-7"
    >
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.soft} blur-2xl`} />
      <div className="relative flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${a.soft} ${a.text}`}>
          {icon}
        </div>
        <span className={`h-2 w-2 rounded-full ${a.bg}`} />
      </div>
      <div className="relative mt-8">
        <div className="num font-display text-5xl text-ink md:text-6xl">{value}</div>
        <div className="mt-2 text-sm font-medium text-ink">{label}</div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </motion.div>
  );
}
