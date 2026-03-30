
import { motion } from 'framer-motion';
import { skills } from '../data/content';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">My Expertise</h2>
          <div className="w-20 h-1 text-blue-500 mx-auto mt-4 rounded"></div>
        </motion.div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
  {skills.map((skill, index) => (
    <motion.div
      key={skill.id ?? index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, backgroundColor: "#FFF5F5" }}
      className="p-6 bg-gray-50 rounded-xl shadow-sm text-center border border-gray-100 hover:border-blue-500 transition-colors cursor-default"
    >
      <h3 className="font-semibold text-gray-700">{skill.name}</h3>
      {skill.level && (
        <p className="text-sm text-gray-500 mt-2">{skill.level}</p>
      )}
      {skill.description && (
        <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
      )}
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Skills;