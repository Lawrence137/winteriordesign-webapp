import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Contact from '../components/Contact';
import PageSEO from '../components/PageSEO';

function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Winterior Design',
    'description': 'Premium interior design services in Kenya, specializing in modern kitchen cabinets, bathroom vanities, wardrobes, and TV units.',
    'url': 'https://winteriordesign.com',
    'logo': 'https://winteriordesign.com/images/logo.jpg',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Nairobi',
      'addressRegion': 'Nairobi',
      'addressCountry': 'KE'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+254728846560',
      'contactType': 'customer service'
    },
    'sameAs': [
      'https://www.facebook.com/winteriordesign',
      'https://www.instagram.com/winteriordesign'
    ]
  };

  return (
    <>
      <PageSEO
        title="Winterior Design - Modern Interior Design Solutions in Kenya"
        description="Transform your space with Winterior Design's premium interior design services in Kenya. Specializing in modern kitchen cabinets, bathroom vanities, wardrobes, and TV units."
        keywords="interior design, kitchen cabinets, bathroom vanities, wardrobes, TV units, modern design, Kenya, Nairobi"
        url="/"
        structuredData={structuredData}
      />
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}

export default Home; 