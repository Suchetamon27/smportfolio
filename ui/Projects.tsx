import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectCard3DProps {
  project: {
    id: number;
    title: string;
    fullDescription: string;
    tags: string[];
    gradient: string;
  };
  index: number;
}

export function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
      >
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient}`} />
        
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="absolute -top-3 -right-3"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-lg`}>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="space-y-4" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
              {project.title}
            </h3>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{ transform: 'translateZ(30px)' }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -5 }}
                style={{ transform: 'translateZ(30px)' }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
              </motion.button>
            </div>
          </div>
          
          <p className="text-slate-400">{project.fullDescription}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                style={{ transform: 'translateZ(15px)' }}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-300 border border-white/10 hover:border-purple-400/50 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 3D Shadow Layer */}
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
          style={{ transform: 'translateZ(-10px)' }}
        />
      </motion.div>

      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
      />
    </motion.div>
  );
}
