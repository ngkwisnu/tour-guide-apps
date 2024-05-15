import Hero from '../component/hero';
import PopularDestination from '../component/popularDest';
import Testimonial from '../component/testimonial';
import Benefit from '../component/benefit';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestination />
      <Benefit />
      <Testimonial />
    </>
  );
}
