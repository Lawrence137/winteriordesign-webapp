import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Winterior Design - Modern Interior Design Solutions',
  description = 'Premium interior design services in Kenya. Specializing in modern kitchen cabinets, bathroom vanities, wardrobes, and TV units.',
  keywords = 'interior design, kitchen cabinets, bathroom vanities, wardrobes, TV units, modern design, Kenya, Nairobi',
  image = '/images/og-image.jpg',
  url = 'https://winteriordesign.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Winterior Design",
          "image": "https://winteriordesign.com/images/logo.jpg",
          "description": "Premium interior design services in Kenya",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Address",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi",
            "addressCountry": "KE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.2921,
            "longitude": 36.8219
          },
          "url": "https://winteriordesign.com",
          "telephone": "+254728846560",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 