import { motion } from 'motion/react';
import { Code2, Palette, Sparkles, Rocket, Zap, Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
        >
          <Rocket className="w-10 h-10 text-purple-400" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
        >
          <Zap className="w-8 h-8 text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-pink-500/30 flex items-center justify-center"
        >
          <Star className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full">
        <div className="text-center space-y-8">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-sm text-purple-300">Welcome to my portfolio</span>
            </div>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
            style={{ perspective: '1000px' }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent relative"
              style={{ 
                transformStyle: 'preserve-3d',
                textShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
              }}
              animate={{
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Hi, I'm Sucheta
            </motion.h1>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-cyan-500/10"
              >
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span className="text-lg text-slate-200">Frontend Developer</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"
              >
                <Palette className="w-5 h-5 text-purple-400" />
                <span className="text-lg text-slate-200">UI/UX Designer</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Description with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed"
          >
            I'm a passionate{' '}
            <span className="text-purple-400">Frontend Developer & UI/UX Designer</span>{' '}
            who loves building beautiful, fast, and accessible web experiences. I build modern
            interfaces with motion design, creative interactions, and performance in mind.
            Enhancing my skills in Backend too & stepping into the evolving frontier of{' '}
            <span className="text-cyan-400">Web3</span>.
          </motion.p>

          {/* CTA Buttons with Glow Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2"
            >
              <span className="text-sm text-slate-400">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
