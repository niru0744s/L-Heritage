import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Heritage from '@/components/Heritage';
import Experience from '@/components/Experience';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Heritage />
      <Experience />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}
