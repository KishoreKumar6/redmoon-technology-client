import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react'
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem, PageTransition } from '../../components/animations/index.jsx'

const values = [
  { icon: Target, title: 'Mission', desc: 'To empower businesses with cutting-edge digital solutions that drive real, measurable growth.' },
  { icon: Eye, title: 'Vision', desc: 'To be Tamil Nadu\'s most trusted premium technology partner, known for excellence and impact.' },
  { icon: Heart, title: 'Values', desc: 'Integrity, transparency, and relentless quality. We do what\'s right for clients, every single time.' },
]

const timeline = [
  { year: '2021', title: 'Founded', desc: 'Red Moon Technology was born with a mission to deliver world-class software to Indian businesses.' },
  { year: '2022', title: 'First 25 Clients', desc: 'Expanded our services to mobile apps and digital marketing. Built our first enterprise CRM.' },
  { year: '2023', title: 'Regional Leader', desc: 'Recognized as a top digital agency in Tamil Nadu. Delivered 75+ successful projects.' },
  { year: '2024', title: 'Scaling Up', desc: 'Launched WhatsApp automation division. Crossed 150+ projects with 50+ happy clients globally.' },
]

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Red Moon Technology</title>
        <meta name="description" content="Learn about Red Moon Technology — our story, mission, values, and the team building world-class digital products." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="absolute inset-0 line-pattern opacity-20" />
        <div className="container-custom text-center relative z-10">
          <FadeInUp>
            <span className="eyebrow mb-5 block">About Us</span>
            <h1 className="heading-section text-white mb-5">
              The Story Behind <span className="gradient-text">Red Moon</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
              We started with one belief: that Indian businesses deserve world-class digital products. Today, we're the agency that delivers exactly that.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="gradient-border p-8 text-center card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-red-400" />
                  </div>
                  <h3 className="text-white font-poppins font-bold text-xl mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <span className="eyebrow mb-5 block">Our Story</span>
              <h2 className="heading-section text-white mb-6">Built in Tamil Nadu, <span className="gradient-text">Trusted Globally</span></h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Red Moon Technology was founded with a single mission: to give Indian businesses access to the same quality of digital products that only large corporations could afford. We saw too many small and mid-sized companies settle for mediocre websites and half-baked apps.</p>
                <p>Starting from Ranipet, Tamil Nadu, we built a team of passionate engineers, designers, and marketers who believe that every line of code, every pixel, and every campaign should be exceptional.</p>
                <p>Today, we've delivered 150+ projects across industries — from healthcare and e-commerce to NGOs and SaaS platforms — with clients spanning India, UAE, and beyond.</p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '150+', label: 'Projects Delivered' },
                  { value: '50+', label: 'Happy Clients' },
                  { value: '3+', label: 'Years of Excellence' },
                  { value: '10+', label: 'Industries Served' },
                ].map(({ value, label }) => (
                  <div key={label} className="glass rounded-2xl p-6 text-center card-hover">
                    <div className="text-3xl font-poppins font-black gradient-text mb-2">{value}</div>
                    <div className="text-white/50 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <FadeInUp className="text-center mb-14">
            <span className="eyebrow mb-4 block">Our Journey</span>
            <h2 className="heading-section text-white">Milestones That <span className="gradient-text">Matter</span></h2>
          </FadeInUp>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-red-500/30 to-transparent hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeInUp key={item.year} delay={i * 0.1}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass rounded-2xl p-6 card-hover">
                        <div className="text-red-400 font-grotesk font-bold text-sm mb-2">{item.year}</div>
                        <h3 className="text-white font-grotesk font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black glow-red-sm shrink-0 relative z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
