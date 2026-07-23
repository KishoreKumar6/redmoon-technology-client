import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'
import api from '../../api/axios.js'

const sampleBlogs = [
  { _id: '1', title: 'Why Your Business Needs a Mobile App in 2024', slug: 'business-mobile-app-2024', category: 'Mobile', excerpt: 'Mobile apps are no longer a luxury — they\'re a competitive necessity. Here\'s why your business needs one now.', date: '2024-11-15', author: 'Red Moon Team', readTime: '5 min' },
  { _id: '2', title: 'The Ultimate Guide to Technical SEO', slug: 'technical-seo-guide', category: 'SEO', excerpt: 'From Core Web Vitals to structured data, this comprehensive guide covers everything you need to rank higher.', date: '2024-11-08', author: 'Red Moon Team', readTime: '8 min' },
  { _id: '3', title: 'React vs Next.js: Which Should You Choose?', slug: 'react-vs-nextjs', category: 'Development', excerpt: 'Both are powerful — but the right choice depends on your project. We break down the trade-offs clearly.', date: '2024-10-30', author: 'Red Moon Team', readTime: '6 min' },
  { _id: '4', title: 'How WhatsApp Automation Can 3x Your Sales', slug: 'whatsapp-automation-sales', category: 'Marketing', excerpt: 'WhatsApp has 500M+ Indian users. Here\'s how smart automation turns it into your most powerful sales channel.', date: '2024-10-22', author: 'Red Moon Team', readTime: '7 min' },
  { _id: '5', title: 'Building a CRM From Scratch: MERN Stack Guide', slug: 'mern-crm-guide', category: 'Development', excerpt: 'A step-by-step guide to building a production-ready CRM with React, Express, and MongoDB.', date: '2024-10-10', author: 'Red Moon Team', readTime: '12 min' },
  { _id: '6', title: 'Glassmorphism UI Design Trends 2024', slug: 'glassmorphism-ui-trends', category: 'Design', excerpt: 'Glassmorphism is here to stay. Learn how to implement it properly without sacrificing accessibility.', date: '2024-09-28', author: 'Red Moon Team', readTime: '4 min' },
]

const cats = ['All', 'Development', 'Mobile', 'SEO', 'Marketing', 'Design']

export default function Blog() {
  const [blogs, setBlogs] = useState(sampleBlogs)
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = blogs.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCat = cat === 'All' || b.category === cat
    return matchSearch && matchCat
  })

  return (
    <PageTransition>
      <Helmet>
        <title>Blog | Red Moon Technology</title>
        <meta name="description" content="Insights on web development, mobile apps, digital marketing, and technology from Red Moon Technology." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">Blog</span>
            <h1 className="heading-section text-white mb-5">Insights & <span className="gradient-text">Resources</span></h1>
            <p className="text-white/50 max-w-xl mx-auto text-base mb-8">Deep dives, tutorials, and strategy guides from our team of experts.</p>
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="input-glass pl-10 text-sm"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Category filter */}
      <div className="py-6 bg-black border-b border-white/5 sticky top-20 z-40 backdrop-blur-xl bg-black/80">
        <div className="container-custom flex flex-wrap justify-center gap-2">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-medium transition-all ${
                cat === c ? 'bg-red-500 text-white' : 'glass text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <FadeInUp className="text-center py-20">
              <div className="text-white/20 text-6xl mb-4">📝</div>
              <p className="text-white/40">No articles found for your search.</p>
            </FadeInUp>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {filtered.map(b => (
                <StaggerItem key={b._id}>
                  <Link to={`/blog/${b.slug}`} className="block group">
                    <div className="gradient-border rounded-2xl overflow-hidden card-hover h-full">
                      {/* Thumbnail placeholder */}
                      <div className="h-44 bg-gradient-to-br from-red-500/10 to-dark-card relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="tag">{b.category}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark-card to-transparent" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-white font-grotesk font-semibold text-base mb-3 leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                          {b.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">{b.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center gap-3 text-white/30 text-xs">
                            <span className="flex items-center gap-1"><Calendar size={11} /> {b.date}</span>
                            <span>{b.readTime} read</span>
                          </div>
                          <ArrowRight size={14} className="text-red-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
