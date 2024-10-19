import Image from 'next/image';
import underline from '../../public/underline-tittle.png';
import { ArrowRight } from '@/icons/arrow-right';

export const SectionCustomize = () => {
  return (
    <section className="mt-[100px] px-4">
      <div>
        <h2 className="text-center z-10 relative">
          Customise it to{' '}
          <span className="underline-span relative inline-block">
            your needs
            <Image
              src={underline}
              alt="underline"
              className="absolute bottom-[-10px] left-0 w-full h-auto -z-10" // Додаємо ширину 100%
            />
          </span>
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center mt-8 text-mainFont">
          Lorem ipsum doler gfhdgckjsdgcagvcds dfvdsghcvds hgdvc dshgcv . hdgvc
          hdsgc shgdcv dshgcv sdhg chdgsvc dhs hsgv hdgc s . g dvsav jh ghbds
          asnb . x . vfgdsa sbv .
        </p>
        <div className="flex justify-center">
          <button className="font-inter text-nowrap flex items-center font-medium text-[16px] leading-5 px-10 py-5 mt-[60px] rounded-[8px] bg-buttonBlue text-white">
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[60px]">
        <div className="w-full md:w-[400px] h-[360px] bg-[#C4DEFD]"></div>
      </div>
    </section>
  );
};
