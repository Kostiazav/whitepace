import Image from 'next/image';
import underline from '../../public/underline-tittle.png';

export const SectionPlan = () => {
  return (
    <section className="mt-[100px] px-4">
      <div>
        <h2 className="text-center z-10 relative">
          Choose{' '}
          <span className="underline-span relative inline-block">
            Your Plan
            <Image
              src={underline}
              alt="underline"
              className="absolute bottom-0 left-0 w-full h-[20px] -z-10"
            />
          </span>
        </h2>
        <p className="font-inter font-normal text-[18px] leading-6 text-center mt-8 text-mainFont">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="px-[60px] w-full md:w-1/2 flex justify-center items-center mt-[60px]">
        <div className="w-full md:w-[400px] h-[360px] bg-[#C4DEFD]"></div>
      </div>
    </section>
  );
};
