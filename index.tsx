// FIX: Add imports for React and ReactDOM to resolve reference errors.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-slate-400">I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            Mohamad Fikrie
          </span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl text-slate-300 font-semibold">
          Content Creator & AI Enthusiast
        </h2>
        <div className="mt-6 w-48 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto rounded"></div>
        <div className="mt-8 max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <p className="text-base text-slate-300">
            A passionate multimedia creative from Johor, Malaysia, with a diploma in Multimedia Application. I blend cutting-edge editing skills with AI innovation to bring digital stories to life.
          </p>
        </div>
      </div>
    </section>
  );
};

// Projects Data
const projects = [
  {
    title: 'Online Order Pro',
    url: 'https://autosystem.web.konten.site/',
  },
  {
    title: 'Report Generator PDF',
    url: 'https://reportmedia.konten.site/',
  },
  {
    title: 'Gold Calculation & Customer Database',
    url: 'https://mgsbsystem.konten.site/',
  },
];

// Projects Section Component
const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
       <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            My Projects
            </span>
        </h2>
        <p className="mt-2 text-sm text-slate-400 uppercase tracking-wider">
            You can buy and custom.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-slate-800 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-1"
            aria-label={`View project: ${project.title}`}
          >
            <h3 className="text-md font-semibold text-slate-200 flex items-center justify-between">
              <span>{project.title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};


// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} MOHAMAD FIKRIE</p>
      </div>
    </footer>
  );
};


// Main App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans flex flex-col">
      <main className="container mx-auto px-6 lg:px-8 flex-grow">
        <div className="pt-24 md:pt-32">
            <HeroSection />
        </div>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};


// Rendering Logic
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);