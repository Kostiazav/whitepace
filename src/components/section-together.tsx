import Image from 'next/image';
import underline from '../../public/bg-together.png';
import about from '../../public/work-together-image.png';
import { ArrowRight } from '@/icons/arrow-right';

export const SectionTogether = () => {
  return (
    <section className="mt-[100px] px-4 relative">
      <div>
        <h2 className="text-center z-10 relative">
          Work{' '}
          <span className="underline-span relative inline-block">
            together
            <Image
              src={underline}
              alt="underline"
              width={100}
              height={100}
              className="absolute bottom-[-10px] left-0 w-full -z-10 h-[30px]"
            />
          </span>
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center mt-8 text-mainFont">
          Our team is made up of dedicated students who are committed to
          providing exceptional window cleaning services. We spark nothing but
          confidence within our customers with our young and strong crew that
          make your windows as clean as can be.
        </p>
        <div className="flex justify-center">
          <button className="font-inter text-nowrap flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Try it now <ArrowRight />
          </button>
        </div>
      </div>
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[100px]">
        <Image
          src={about}
          alt="bg-circule"
          className="w-full"
          width={200}
          height={350}
        />
      </div>
    </section>
  );
};
