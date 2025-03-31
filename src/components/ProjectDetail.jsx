import { useParams } from 'react-router-dom';
import { portfolioItems } from '../data';

function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioItems.find(item => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="mb-4">
        <img src={project.imageUrl} alt={project.title} className="rounded shadow-md" />
      </div>
      <p className="text-lg">{project.description}</p>
      {/* Additional images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {project.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`Additional ${index}`} className="rounded shadow-md" />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
