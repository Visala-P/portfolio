import { Download, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import resumeFile from '/UIUX_resume.pdf';

const profileImage = `${import.meta.env.BASE_URL}profile.jpeg`;

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white text-black px-6 py-20 relative overflow-hidden flex items-center">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Black decorative circles and curves */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-black rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M 100 300 Q 150 100 300 150"
          stroke="rgb(0, 0, 0)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M 300 450 Q 450 400 500 300"
          stroke="rgb(0, 0, 0)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
      </motion.svg>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-black" />
              <h2 className="text-2xl font-bold text-black">Kasi Visalakshmi P</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              I'm a passionate UI/UX Designer crafting intuitive and user-friendly digital experiences. Specialized in Web & mobile app design. I turn complex ideas into clean, elegant interfaces. Focused on user needs, I create products that truly connect.
            </p>

            <motion.a
              href={resumeFile}
              download="UIUX_resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>

            {/* Floating icons */}
            
          </motion.div>

          {/* Center Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Circular profile image container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-black/50 shadow-2xl shadow-black/30">
                <ImageWithFallback
                  src={profileImage}
                  alt="UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 border-4 border-black border-dashed rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-black" />
              <h3 className="text-2xl font-bold text-black">Digital Domination</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-sm">
              Designing intuitive digital experiences that combine creativity, usability, 
  and modern design principles to deliver meaningful user interactions.
            </p>

            
          </motion.div>
        </div>

        {/* Large Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-0 left-0 right-0 text-center -z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black/10 select-none">
            UI/UX Designer
          </h1>
        </motion.div>
      </div>
    </section>
  );
}