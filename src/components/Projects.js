import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Resume Scanner</h3>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Online Code Editor</h3>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Face-Expression-Recognition</h3>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Keylogger</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
