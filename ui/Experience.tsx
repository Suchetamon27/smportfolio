import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    type: "work",
    title: "Frontend Developer",
    description:
      "Building modern web applications with HTML,CSS,React, and Tailwind CSS.",
  },
  {
    id: 2,
    type: "work",
    title: "UI/UX Designer",
    description:
      "Designed user interfaces for mobile and web applications.",
  },
  {
    id: 3,
    type: "work",
    title: "Developer",
    description:
      "Designed user interfaces using C,C++,DSA,Node.js,MongoDB.",
  },
  {
    id: 4,
    type: "work",
    title: "AI/ML Developer",
    description:
      "Building user interfaces using Generative AI,AI,GitHub Copilot.",
  },
  {
    id: 5,
    type: "work",
    title: "Open Source Contributer",
    company:
      "Hacktoberfest 2025,Open Odyssey 2.0,Code Social,Social Winter Of Code - Super Contribute,Top Contributer position in the open source events.",
  },
  {
    id: 6,
    type: "education",
    title: "Bachelor in Computer Science & Engineering",
    company: "Netaji Subhash Engineering College",
    period: "2025 - 2029",
    description:
      "Specialized in Web Development,UI-UX Developer,Web3",
  },
];

export function Experience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My journey in tech and design
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30"
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400 mb-3">
                    {item.company}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
