import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Das",
    role: "Open Source Contributer",
    image: "👩‍💼",
    text: "Sucheta delivered an exceptional website that exceeded our expectations. Her attention to detail and creative approach made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Gupta",
    role: "Contributer",
    image: "👨‍💻",
    text: "Working with Sucheta was a pleasure. She understood our vision and brought it to life with stunning design and smooth functionality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Mathur",
    role: "Designer,Contributer",
    image: "👩‍🎨",
    text: "An incredibly talented developer and designer. The UI/UX work was top-notch, and the project was delivered on time.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear from people
            I've worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-purple-400" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.1 + i * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
