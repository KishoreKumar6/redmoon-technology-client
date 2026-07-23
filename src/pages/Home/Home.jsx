import { Helmet } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import HeroSection from './sections/HeroSection.jsx'
import StatsSection from './sections/StatsSection.jsx'
import ServicesPreview from './sections/ServicesPreview.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import PortfolioPreview from './sections/PortfolioPreview.jsx'
import TechStack from './sections/TechStack.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import ProcessSection from './sections/ProcessSection.jsx'
import PricingPreview from './sections/PricingPreview.jsx'
import FAQSection from './sections/FAQSection.jsx'
import ClientLogos from './sections/ClientLogos.jsx'
import ContactCTA from './sections/ContactCTA.jsx'
import { PageTransition } from '../../components/animations/index.jsx'

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Red Moon Technology | Premium Software Development Company</title>
        <meta name="description" content="Red Moon Technology — World-class software development, mobile apps, digital marketing, and CRM solutions. Based in Tamil Nadu, India." />
        <meta property="og:title" content="Red Moon Technology | Premium Software Company" />
        <meta property="og:description" content="Crafting world-class digital experiences that transform businesses." />
        <link rel="canonical" href="https://redmoontechnology.com" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Red Moon Technology",
          "url": "https://redmoontechnology.com",
          "telephone": "+919629621359",
          "email": "redmoontechnologyofficial@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MBT Road, Navalpure",
            "addressLocality": "Ranipet",
            "addressRegion": "Tamil Nadu",
            "postalCode": "632401",
            "addressCountry": "IN"
          }
        })}</script>
      </Helmet>
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <TechStack />
      <TestimonialsSection />
      <ProcessSection />
      <PricingPreview />
      <FAQSection />
      <ContactCTA />
    </PageTransition>
  )
}
