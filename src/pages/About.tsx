import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "10+ years of experience in cloud architecture and AI development",
    skills: ["Cloud Architecture", "AI/ML", "System Design"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=2",
    bio: "Full-stack developer with a passion for clean code and user experience",
    skills: ["React", "Node.js", "TypeScript"],
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Elena Rodriguez",
    role: "UX/UI Designer",
    image: "https://i.pravatar.cc/300?img=3",
    bio: "Creating intuitive and beautiful user experiences for digital products",
    skills: ["UI Design", "User Research", "Prototyping"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Innovating Tomorrow, Today
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to pushing the boundaries
            of what's possible in the digital world. Our mission is to create innovative
            solutions that make a real difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
              />
              <h3 className="text-2xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-blue-400 text-center mb-4">{member.role}</p>
              <p className="text-gray-400 text-center mb-4">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gray-800 rounded-xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-400">
                We constantly push the boundaries of what's possible in technology.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of working together to achieve great things.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in everything we do.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
