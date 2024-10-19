import { ArrowRight } from '@/icons/arrow-right';
import bgLine from '../../public/bg-top-done.png';

export const GetMore = () => {
  return (
    <section className="md:flex md:justify-center md:items-center w-full">
      <div
        className="bg-cover bg-center bg-no-repeat md:!bg-none h-[500px] md:h-auto flex flex-col justify-center md:justify-start items-center md:items-start w-full md:w-1/2"
        style={{ backgroundImage: `url(${bgLine.src})` }}
      >
        <h2 className="font-bold text-[36px] px-8 text-center md:text-left">
          Get More Done with Window Whales
        </h2>
        <button className="font-inter font-normal text-[18px] leading-8 text-nowrap flex items-center my-[60px] bg-mainFont text-white px-10 py-[20px] mx-auto md:mx-0 md:ml-8 rounded-[8px]">
          GET A FREE QUOTE <ArrowRight />
        </button>
      </div>

      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:w-[400px] h-[360px] bg-[#C4DEFD]"></div>
      </div>
    </section>
  );
};
