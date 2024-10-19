import Image from 'next/image';
import underline from '../../public/bg-together.png';
import about from '../../public/comunication.png';
import { ArrowRight } from '@/icons/arrow-right';

export const SectionCommunication = () => {
  return (
    <section className="mt-[100px] px-4 relative pb-[40px] md:flex md:justify-center md:items-center">
      <div className="px-[60px]  w-full md:w-1/2 flex justify-center items-center mt-[100px md:mx-auto]">
        <Image
          src={about}
          alt="bg-circule"
          className="w-full"
          width={400}
          height={350}
        />
      </div>
      <div className=" md:w-1/2 ">
        <h2 className="text-center z-10 relative  md:text-left">
          100%{' '}
          <span className="underline-span relative inline-block">
            constant
            <Image
              src={underline}
              alt="underline"
              width={100}
              height={100}
              className="absolute bottom-[-10px] left-0 w-full -z-10 h-[30px]"
            />
          </span>{' '}
          comunication
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center  md:text-left mt-8 text-mainFont">
          Our team is made up of dedicated students who are committed to
          providing exceptional window cleaning services. We spark nothing but
          confidence within our customers with our young and strong crew that
          make your windows as clean as can be.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="font-inter text-nowrap flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Read more <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
