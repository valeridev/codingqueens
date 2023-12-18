import { motion } from 'framer-motion';
import { useState } from 'react';

import CreativityCard from '@/components/creativity-card';
import DiscoveryCard from '@/components/discovery-card';
import Footer from '@/components/footer';
import MainNav from '@/components/main-nav';
import MarqueeSection from '@/components/marquee-section';
import { Modal } from '@/components/modal/modal';
import { Button } from '@/components/ui/button';
import { useHomeController } from '@/pages/controller';

const sliderImages = [
  {
    name: 'Image 1',
    imageUrl: 'https://picsum.photos/seed/picsum/224/288',
  },
  {
    name: 'Image 2',
    imageUrl: 'https://picsum.photos/seed/picsum1/224/288',
  },
  {
    name: 'Image 3',
    imageUrl: 'https://picsum.photos/seed/picsum2/224/288',
  },
  {
    name: 'Image 4',
    imageUrl: 'https://picsum.photos/seed/picsum3/224/288',
  },
  {
    name: 'Image 5',
    imageUrl: 'https://picsum.photos/seed/picsum4/224/288',
  },
  {
    name: 'Image 6',
    imageUrl: 'https://picsum.photos/seed/picsum5/224/288',
  },
  {
    name: 'Image 7',
    imageUrl: 'https://picsum.photos/seed/picsum6/224/288',
  },
  {
    name: 'Image 8',
    imageUrl: 'https://picsum.photos/seed/picsum7/224/288',
  },
  {
    name: 'Image 9',
    imageUrl: 'https://picsum.photos/seed/picsum8/224/288',
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleMouse,
    rotateX,
    rotateY,
    handleMouseLeave,
    isFlipped,
    handleFlip,
    setIsAnimating,
  } = useHomeController();

  return (
    <div className="flex flex-1 items-center justify-center">
      <MainNav />

      <div
        className="flex w-full flex-1 flex-col pt-20 lg:max-w-[1280px] 2xl:max-w-[1440px]"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <section className=" mt-8 flex h-[550px] flex-col-reverse items-center justify-between space-y-8 space-y-reverse bg-secondary px-8 py-10 md:flex-row lg:h-[480px]">
          <text className=" animate-fade_in flex-[0.4] text-center text-3xl font-bold leading-tight lg:flex-[0.65] lg:text-left lg:text-5xl">
            Empowering Women in Code. Unleashing Collective Brilliance.
          </text>

          <motion.div
            style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
            onMouseEnter={handleFlip}
            className="animate-fade_in flex h-full w-full flex-[0.6] items-center justify-center  lg:flex-[0.3]"
          >
            <motion.div
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 360 }}
              transition={{ duration: 0.4, animationDirection: 'normal' }}
              onAnimationComplete={() => {
                setIsAnimating(false);
              }}
              className="flex h-full w-full items-center justify-center object-contain"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                // style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
                className="backface-invisible absolute  h-full w-full bg-[url('public/main-section-placeholder-1.png')] bg-contain bg-center bg-no-repeat"
              />
              <motion.div className="backface-invisible absolute  h-full w-full bg-[url('public/main-section-placeholder-2.png')] bg-contain bg-center bg-no-repeat [transform:rotateY(180deg)]" />
            </motion.div>
          </motion.div>
        </section>
        <div className="animate-fade_in flex px-4 py-12  lg:px-8">
          <text className="text-justify text-xl font-bold leading-tight lg:text-left lg:text-2xl">
            At Coding Queens, we celebrate the brilliance of female coders and
            provide a vibrant space for collaboration, learning, and mutual
            support. Dive into a community where your code not only speaks but
            resonates with the collective strength of Coding Queens.
          </text>
        </div>
        <MarqueeSection
          title="Dive into the Coding Queens Creativity Showcase"
          bgClass="bg-primary"
        >
          {sliderImages.map((sliderImage, index) => (
            <li key={index}>
              <CreativityCard imageUrl={sliderImage.imageUrl} />
            </li>
          ))}
        </MarqueeSection>
        <div className="animate-fade_in flex px-4 py-12  lg:px-8">
          <text className="text-justify text-xl font-bold leading-tight lg:text-left lg:text-2xl">
            Welcome to the Coding Queens Creativity Section, a space where
            coding meets creativity in a mesmerizing display. Take a journey
            through our horizontal slider, unveiling a curated selection of
            innovative projects and artistic expressions crafted by the
            brilliant Coding Queens.
          </text>
        </div>
        <MarqueeSection
          title="The Confidence Library: Empowering Coding Queens"
          bgClass="bg-accent"
        >
          {sliderImages.map((sliderImage, index) => (
            <li key={index}>
              <DiscoveryCard
                imageUrl={sliderImage.imageUrl}
                name={sliderImage.name}
              />
            </li>
          ))}
        </MarqueeSection>
        <div className="animate-fade_in flex px-4 py-12  lg:px-8">
          <text className="text-justify text-xl font-bold leading-tight lg:text-left lg:text-2xl">
            Welcome to the Confidence Section, where we celebrate the brilliance
            of Coding Queens and their literary endeavors. Explore our curated
            collection of published books that not only showcase technical
            prowess but also inspire confidence in navigating the ever-evolving
            world of coding.
          </text>
        </div>
        <div className="animate-fade_in flex flex-1 items-center justify-center  p-24">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="h-16 w-80 rounded-xl bg-primary text-3xl font-bold text-background hover:bg-accent hover:text-background hover:drop-shadow-button"
          >
            Join us!
          </Button>
        </div>

        <Footer />
      </div>
      <Modal
        modalTitle="Join us"
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
