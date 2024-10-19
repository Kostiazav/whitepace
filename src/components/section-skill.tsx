import Image from 'next/image';
import skills from '../../public/our-skills.png';
import skillsBg from '../../public/bg-our-skills.png';
import { ArrowRight } from '@/icons/arrow-right';

export const SectionSkills = () => {
  return (
    <section className="py-[40px] px-4 relative bg-bgFooter md:flex">
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[100px] md:mx-auto">
        <Image
          src={skills}
          alt="skills"
          className="w-full z-20"
          width={400}
          height={350}
        />
      </div>
      <div className=''>
        <h2 className="text-center z-10 relative text-white mt-16">
          Work with us and you will see our skills
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center mt-8 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-center">
          <button className="font-inter text-nowrap z-20 flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Read more <ArrowRight />
          </button>
        </div>
      </div>

      <Image
        src={skillsBg}
        alt="bg-circule"
        className="absolute top-20 left-0  w-full"
        width={300}
        height={350}
      />
    </section>
  );
};
