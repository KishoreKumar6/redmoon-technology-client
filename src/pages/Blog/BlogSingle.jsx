import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { FadeInUp, PageTransition } from '../../components/animations/index.jsx'
import toast from 'react-hot-toast'

const samplePost = {
  title: 'Why Your Business Needs a Mobile App in 2024',
  category: 'Mobile',
  date: '2024-11-15',
  readTime: '5 min',
  author: 'Red Moon Team',
  content: `
Mobile apps are no longer a luxury for large corporations. In 2024, having a mobile app is a competitive necessity for businesses of all sizes. Here's why.

## The Numbers Don't Lie

Over 7 billion people worldwide own smartphones. In India alone, there are 650+ million smartphone users — and that number grows every year. If your business doesn't have a mobile presence, you're invisible to a massive chunk of your potential audience.

## Why a Website Isn't Enough

Responsive websites are great, but apps offer things websites simply can't:

- **Push notifications** — Direct communication with users, bypassing email and social algorithms
- **Offline access** — Users can access content even without internet connectivity  
- **Device features** — Camera, GPS, biometrics, contacts — all seamlessly integrated
- **Speed** — Native apps are 50–100x faster than mobile websites for complex interactions
- **Loyalty** — App users spend 3x more than mobile web users on average

## What Type of App Do You Need?

The right app depends on your business model:

**For e-commerce**: A shopping app with wishlist, cart, payment, and order tracking drastically improves conversion and repeat purchases.

**For services**: Appointment booking, service tracking, and push reminders reduce no-shows and automate scheduling.

**For B2B**: CRM-integrated apps give your sales team power to manage deals, log calls, and close leads on the go.

## Flutter vs React Native in 2024

If you're building for both iOS and Android, cross-platform frameworks save 40–60% of development time and cost:

- **Flutter** offers the best performance and pixel-perfect UI — our top recommendation for most clients
- **React Native** is great if you already have a React web codebase and want to share business logic

## The ROI Case

Studies consistently show that businesses with dedicated mobile apps see:
- 30% increase in customer engagement
- 25% boost in revenue from mobile channels
- 40% reduction in customer service costs through self-service features

## Ready to Build?

Red Moon Technology specializes in Flutter and React Native app development. We've delivered 20+ mobile apps across industries — from grocery delivery to healthcare to e-commerce.

Get in touch for a free consultation and project estimate.
  `,
}

export default function BlogSingle() {
  const { slug } = useParams()

  const share = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied to clipboard!')
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{samplePost.title} | Red Moon Technology Blog</title>
        <meta name="description" content={samplePost.content.slice(0, 160)} />
      </Helmet>

      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none opacity-50" />
        <div className="container-custom max-w-3xl relative z-10">
          <FadeInUp>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <span className="tag mb-5 inline-flex">{samplePost.category}</span>
            <h1 className="heading-section text-white mb-6">{samplePost.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-white/40 text-sm mb-10 pb-8 border-b border-white/10">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {samplePost.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {samplePost.readTime} read</span>
              <span className="flex items-center gap-1.5">By {samplePost.author}</span>
              <button onClick={share} className="flex items-center gap-1.5 hover:text-white transition-colors ml-auto">
                <Share2 size={13} /> Share
              </button>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="prose-custom text-white/70 leading-relaxed space-y-5">
              {samplePost.content.trim().split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i} className="text-white font-poppins font-bold text-xl mt-8 mb-3">{block.replace('## ', '')}</h2>
                }
                if (block.startsWith('**')) {
                  return <p key={i} className="text-white/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                }
                if (block.startsWith('-')) {
                  const items = block.split('\n').filter(l => l.startsWith('-'))
                  return (
                    <ul key={i} className="space-y-2 list-none">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  )
                }
                return <p key={i} className="text-white/60 text-sm leading-relaxed">{block}</p>
              })}
            </div>
          </FadeInUp>

          {/* CTA */}
          <FadeInUp delay={0.2} className="mt-16 gradient-border rounded-2xl p-8 text-center">
            <h3 className="text-white font-poppins font-bold text-xl mb-3">Ready to Build Your App?</h3>
            <p className="text-white/50 text-sm mb-6">Get a free consultation and project estimate from our team.</p>
            <Link to="/contact" className="btn-primary text-sm inline-flex">
              <span className="relative z-10">Start a Project</span>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
