import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { PosterGallery } from './components/PosterGallery';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  const projects = [
    {
      title: 'Gym Promotional Website',
      description: 'A modern and engaging promotional website design for a fitness center, featuring dynamic layouts and motivational imagery to inspire visitors to join.',
      imageUrl: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NzM0MjA4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      figmaLink: 'https://www.figma.com/design/mlXWWC0wfAk4lFGj4jmD6R/gym-promotional-website?m=auto&t=amuMv7J7l6pN8UQx-6',
      tags: ['Web Design', 'UI/UX', 'Fitness', 'Marketing'],
    },
    {
      title: 'Ecomart - Sustainable E-commerce',
      description: 'An eco-friendly e-commerce platform design focused on sustainable products, featuring clean navigation and product showcase to promote environmentally conscious shopping.',
      imageUrl: 'https://images.unsplash.com/photo-1649694902788-9ccda3aa1d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MzQ2ODIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      figmaLink: 'https://www.figma.com/design/EZK0t7c1JyXoqIUpg5yvqK/Ecomart?m=auto&t=amuMv7J7l6pN8UQx-6',
      tags: ['E-commerce', 'UI/UX', 'Sustainability', 'Mobile First'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex gap-8">
            <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
              Projects
            </a>
            <a href="#posters" className="text-gray-700 hover:text-black transition-colors">
              Posters
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selected work showcasing my approach to digital product design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Poster Gallery */}
      <PosterGallery />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
