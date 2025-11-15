import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code, Award, Users, Coffee } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Projects Completed', value: 15, suffix: '+' },
  { icon: Award, label: 'Awards Won', value: 5, suffix: '+' },
  { icon: Users, label: 'Happy Clients', value: 20, suffix: '+' },
  { icon: Coffee, label: 'Cups of Coffee', value: 100, suffix: '+' },
];

export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative group"
    >
      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Icon */}
        <div className="relative mb-4 inline-flex items-center justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center"
          >
            <stat.icon className="w-6 h-6 text-purple-400" />
          </motion.div>
        </div>

        {/* Number */}
        <div className="text-4xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
          {count}{stat.suffix}
        </div>

        {/* Label */}
        <div className="text-sm text-slate-400">{stat.label}</div>
      </div>
    </motion.div>
  );
}
