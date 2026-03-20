import { ExternalLink, Figma } from 'lucide-react';
import posterOne from '/Poster 1.png';
import posterTwo from '/Poster 2.png';
import posterThree from '/Poster 3.png';
import posterFour from '/Poster 4.png';
import posterFive from '/Poster 5.png';
import posterSix from '/Poster 6.png';

const posterLink = 'https://www.figma.com/design/GyqrkXD6vr5k0HUiA8aufz/posters?m=auto&t=amuMv7J7l6pN8UQx-6';

const posters = [
  {
    id: 'poster-analog-rhythm',
    title: 'Analog Rhythm',
    detail: 'Gradient-driven kinetic typography',
    imageUrl: posterOne,
  },
  {
    id: 'poster-night-shift',
    title: 'Night Shift',
    detail: 'High-contrast brutalist layout',
    imageUrl: posterTwo,
  },
  {
    id: 'poster-mono-wave',
    title: 'Mono Wave',
    detail: 'Monochrome lines and motion blur',
    imageUrl: posterThree,
  },
  {
    id: 'poster-solar-bloom',
    title: 'Solar Bloom',
    detail: 'Oversized serif with warm gradients',
    imageUrl: posterFour,
  },
  {
    id: 'poster-cyber-folk',
    title: 'Cyber Folk',
    detail: 'Folklore motifs recast in neon',
    imageUrl: posterFive,
  },
  {
    id: 'poster-echo-grid',
    title: 'Echo Grid',
    detail: 'Structured editorial collage',
    imageUrl: posterSix,
  },
];

export function PosterGallery() {
  return (
    <section id="posters" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Poster Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of creative poster designs showcasing visual communication and typography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posters.map((poster) => (
            <a
              key={poster.id}
              href={posterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto block aspect-square w-full max-w-[1080px] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={poster.imageUrl}
                alt={`${poster.title} poster`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain bg-gray-900 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex h-full flex-col items-center justify-end gap-2 px-6 pb-8 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Figma className="w-10 h-10" />
                <p className="text-xl font-semibold tracking-tight">{poster.title}</p>
                <p className="text-sm text-white/80">{poster.detail}</p>
                <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                  View in Figma
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={posterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg"
          >
            <Figma className="w-5 h-5" />
            View All Posters in Figma
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
