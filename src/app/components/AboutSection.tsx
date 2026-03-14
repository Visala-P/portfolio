import { Palette, Users, Lightbulb, Sparkles } from 'lucide-react';

export function AboutSection() {
  const skills = [
    { icon: Palette, title: 'Visual Design', description: 'Creating aesthetically pleasing and cohesive designs' },
    { icon: Users, title: 'User Research', description: 'Understanding user needs and behaviors' },
    { icon: Lightbulb, title: 'Problem Solving', description: 'Finding creative solutions to design challenges' },
    { icon: Sparkles, title: 'Prototyping', description: 'Building interactive prototypes in Figma' },
  ];
  
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About My Design Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I focus on creating user-centered designs that solve real problems while maintaining visual excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl border-2 border-gray-200 hover:border-black transition-colors"
            >
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
