import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Tracks from '@/components/Tracks';
import Curriculum from '@/components/Curriculum';
import Audience from '@/components/Audience';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Tracks />
        <Curriculum />
        <Audience />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
