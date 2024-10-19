import Image from 'next/image';
import underline from '../../public/underline-tittle.png';
import about from '../../public/bg-about-left.png';
import { ArrowRight } from '@/icons/arrow-right';
export const AboutSection = () => {
  return (
    <section className="mt-[100px] px-4 relative">
      <div>
        <h2 className="text-center z-10 relative">
          About{' '}
          <span className="underline-span relative inline-block">
            Window Whales
            <Image
              src={underline}
              alt="underline"
              className="absolute bottom-[-10px] left-0 w-full h-auto -z-10" // Додаємо ширину 100%
            />
          </span>
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center mt-8 text-mainFont">
          Window Whales, founded by two ambitious students at York High School,
          is a burgeoning company that specializes in window cleaning. We take
          pride in our service and provide the best possible cleaning to your
          windows.
        </p>
        <div className="flex justify-center">
          <button className="font-inter font-medium text-[16px] text-nowrap flex items-center leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[60px]">
        <div className="w-full md:w-[400px] h-[360px] bg-[#C4DEFD]"></div>
      </div>
      <Image
        src={about}
        alt="bg-circule"
        className="absolute top-0 left-0 -z-10 opacity-30"
        width={200}
        height={350}
      />
    </section>
  );
};
