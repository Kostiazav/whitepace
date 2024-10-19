import Image from 'next/image';
import underline from '../../public/result-underline.png';
import about from '../../public/result-group.png';
import { ArrowRight } from '@/icons/arrow-right';
export const SectionResult = () => {
  return (
    <section className="py-[100px] px-4 relative bg-bgFooter mt-20">
      <div>
        <h2 className="text-start z-10 relative text-white ">
          We care about the{' '}
          <span className="underline-span relative inline-block !text-white">
            result
            <Image
              src={underline}
              alt="underline"
              className="absolute bottom-0 left-0 w-full h-[20px] -z-10"
            />
          </span>{' '}
          and quality
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-start mt-8 text-white">
          lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className="flex justify-start">
          <button className="font-inter text-nowrap z-20 flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Contacts <ArrowRight />
          </button>
        </div>
      </div>

      <Image
        src={about}
        alt="bg-circule"
        className="absolute top-0 left-0  opacity-30"
        width={300}
        height={350}
      />
    </section>
  );
};
