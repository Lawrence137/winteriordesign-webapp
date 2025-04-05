import { useParams } from 'react-router-dom';
import { portfolioItems } from '../data';
import Modal from '../components/Modal';
import { useState } from 'react';
import PageSEO from '../components/PageSEO';
import OptimizedImage from '../components/OptimizedImage';

function ProjectDetail() {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const project = portfolioItems.find(item => item.id === parseInt(id));

  if (!project) {
    return (
      <>
        <PageSEO
          title="Project Not Found - Winterior Design"
          description="The requested project could not be found. Browse our other interior design projects."
          url={`/portfolio/${id}`}
        />
        <div className="pt-20 container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Project not found</h1>
        </div>
      </>
    );
  }

  // Generate structured data for the project
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': project.title,
    'description': project.description,
    'image': [project.imageUrl, ...(project.additionalImages || [])],
    'category': project.category,
    'brand': {
      '@type': 'Brand',
      'name': 'Winterior Design'
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'KES',
      'priceValidUntil': new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      'url': `https://winteriordesign.com/portfolio/${id}`
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '27'
    }
  };

  return (
    <>
      <PageSEO
        title={`${project.title} - Winterior Design Portfolio`}
        description={`${project.description} View our ${project.category} project and get inspired for your next interior design project.`}
        keywords={`${project.category.toLowerCase()}, interior design, ${project.title.toLowerCase()}, modern design, Kenya, Nairobi`}
        image={project.imageUrl}
        url={`/portfolio/${id}`}
        type="product"
        structuredData={structuredData}
      >
        {/* Additional meta tags for rich snippets */}
        <meta property="product:brand" content="Winterior Design" />
        <meta property="product:category" content={project.category} />
        <meta property="product:availability" content="in stock" />
      </PageSEO>

      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
          <div className="mb-4">
            <OptimizedImage 
              src={project.imageUrl} 
              alt={project.title} 
              className="rounded shadow-md w-full h-auto"
              onClick={() => setSelectedItem(project)}
              width={1200}
              height={800}
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
          </div>
          <p className="text-lg mb-8">{project.description}</p>
          
          {/* Additional images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.additionalImages?.map((img, index) => (
              <OptimizedImage 
                key={index} 
                src={img} 
                alt={`${project.title} - View ${index + 1}`} 
                className="rounded shadow-md w-full h-auto cursor-pointer"
                onClick={() => setSelectedItem(project)}
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
    </>
  );
}

export default ProjectDetail; 