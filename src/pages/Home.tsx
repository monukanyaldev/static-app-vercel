import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    { name: 'AI & Machine Learning', icon: '🤖' },
    { name: 'Web Development', icon: '💻' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Cybersecurity', icon: '🔒' },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Video Banner Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/videos/poster.jpg"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
        </div>
        
        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Innovate. Create. Build.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12">
                Empowering the future through cutting-edge technology solutions
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

        {/* Technologies Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400">Discover the latest innovations in {tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
