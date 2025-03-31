import { useParams } from 'react-router-dom';
import { portfolioItems } from '../data';
import Modal from '../components/Modal';
import { useState } from 'react';

function ProjectDetail() {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const project = portfolioItems.find(item => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="mb-4">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="rounded shadow-md w-full h-auto"
            onClick={() => setSelectedItem(project)}
          />
        </div>
        <p className="text-lg mb-8">{project.description}</p>
        
        {/* Additional images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.additionalImages?.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Additional ${index}`} 
              className="rounded shadow-md w-full h-auto cursor-pointer"
              onClick={() => setSelectedItem(project)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}

export default ProjectDetail; 